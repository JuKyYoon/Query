<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <h2 class="logo_title text-center">Query</h2>
          <p class="sub_title text-center">Questions worth spreading</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form class="form-horizontal" method="POST">
            <div class="form-group">
              <label for="name" class="col-md-4 control-label white">Name</label>
              <div class="col-md-6">
                <input id="name" type="text" placeholder="Your name" class="form-control login-form" name="name"
                  value="" required autofocus>
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-md-4 control-label white">E-Mail Address</label>

              <div class="col-md-6">
                <input id="email" type="email" placeholder="Your Email" class="form-control login-form" name="email"
                  value="" required>
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="col-md-4 control-label white">Password</label>

              <div class="col-md-6">
                <input id="password" type="password" placeholder="At least 6 letters" class="form-control login-form"
                  name="password" required>
              </div>
            </div>
            <div class="form-group">
              <label for="password-confirm" class="col-md-4 control-label white">Confirm Password</label>

              <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control login-form"
                  name="password_confirmation" required>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-block login-button">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data () {
    return {
      userType: 1
    }
  }
}
</script>

<style>
@import '../assets/css/app.css';
@import '../assets/css/login.css';
</style>
