<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text"
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p class="g-form-error">{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = 'User Name does not contain @'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = 'Password should be in 1 - 6 digits'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = 'Credentials not qualified'
      }
      else {
        this.errorText = ''
        this.$http.post('api/login')
        .then((res) => {
          this.$emit('has-log', res.data)
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
