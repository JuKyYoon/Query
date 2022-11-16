<template>
  <div>
    <div class="overlay" v-if='isLogin'>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <h2 class="logo_title text-center">Query</h2>
            <p class="sub_title text-center">Questions worth spreading</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <div class="col-sm-6 codePanel">
              <div class="space"></div>
              <form action="/" method="POST">
                <div class="form-group code-form">
                  <div class="input-group">
                    <div class="input-group-addon icon"><i class="fa fa-link"></i></div>
                    <input type="text" name="code" class="form-control login-form"
                      placeholder="Enter your chatroom code" required />
                  </div>
                </div>
                <div class="input-group">
                  <div class="input-group-addon icon"><i class="fa fa-user"></i></div>
                  <input placeholder="Enter your nickname" name="nickname" type="text" class="form-control login-form"
                    required>
                </div>
                <button class="btn btn-block access-button" type="submit">
                  Enter
                </button>
              </form>
            </div>
            <div class="col-sm-6 loginPanel">
              <div class="forms">
                <form method="POST">
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon icon">
                        <i class="fa fa-envelope"></i>
                      </div>
                      <input type="text" name="email" class="form-control login-form" value="" id="email"
                        placeholder="Email" required autofocus>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon icon"><i class="fa fa-key"></i></div>
                      <input type="password" name="password" class="form-control login-form" id="password"
                        placeholder="password" required>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-block  login-button">
                    Login
                  </button>
                </form>
                <a href="/register" class="noline">
                  <button class="btn btn-block register-button">
                    Register
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" v-else>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <h2 class="logo_title text-center">Query</h2>
            <p class="sub_title text-center">Questions worth spreading</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <a href="/home" v-if="userType == 1">
              <button class="btn btn-warning btn-block register-button">
                Go to home!
              </button>
            </a>
            <a href="/chatroom/code" v-else>
              <button class="btn btn-warning btn-block register-button">
                Go to Chatroom!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    return {
      isLogin: true,
      userType: 1
    }
  }
}
</script>

<style>
@import '../assets/css/app.css';
@import '../assets/css/login.css';
</style>
