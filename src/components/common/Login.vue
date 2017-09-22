<template>

    <div class="panel">
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <div class="card">
                <div class="header">
                  <h4 class="title text-center">登录</h4>
                </div>
                <div class="content">
                  <form>
                    <div class="row">
                      <div class="col-md-3"></div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>用户名</label>
                          <input type="text" class="form-control" placeholder="用户名" value="username">
                        </div>
                      </div>

                    </div>

                    <div class="row">
                      <div class="col-md-3"></div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>密码</label>
                          <input type="password" class="form-control" placeholder="密码" value="">
                        </div>
                      </div>

                    </div>

                    <div class="row">
                      <div class="col-md-5"></div>
                      <div class="col-md-6">
                        <button type="submit" class="btn btn-info btn-fill pull-left" v-on:click="login">登录</button>
                      </div>
                    </div>

                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    name: 'Login',
    methods: {
      login: function () {
        this.$cookies.set('token', 'mohaijiang', '1h')
        let redirectUrl = '/'
        if (this.$route.query.redirect) {
          redirectUrl = this.$route.query.redirect
        }
        this.$router.push(redirectUrl)
      }
    }
  }
</script>
