<template>
  <div id="wrapper" :class="{'toggled' : isToggle}">
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav" v-if="userType == 1">
        <li class="sidebar-brand">
          <button class="btn btn-link plus">
            <font-awesome-icon icon="fa-solid fa-plus" size="2x" :style="{ color: 'grey' }" />
          </button>
          <a href="/home">
            <h2 class="logo_text">Query</h2>
          </a>
        </li>
        <li><a class="chatroomList" href="#">SkyBlue</a></li>
        <li><a class="chatroomList" href="#">RedGreen</a></li>
        <li><a class="chatroomList" href="#">PinkPurple</a></li>
      </ul>
      <ul class="sidebar-nav" v-else>
        <li class="sidebar-brand">
          <h2 class="logo_text">Query</h2>
        </li>
        <div class="users">
          <div v-for="(user, index) in users" :key="user.email">
            <li>
              <font-awesome-icon icon="fa-solid fa-user" /><strong> {{ user.name }}</strong>
            </li>
          </div>
        </div>
      </ul>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <div class="row page_header">
          <button class="btn btn-default toggle_button" id="menu-toggle" @click="toggleMenu">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
          <span class="user_name">{{ name }}</span>
          <!-- Top-Navbar -->
          <span v-if="userType == 1">
            <a href="/">
              <span class="logout">
                <font-awesome-icon icon="fa-solid fa-right-from-bracket" /> Logout
              </span>
            </a>
            <span class="bar"> | </span>
            <a class="question" data-toggle="modal" data-target="#queryModal">
              <font-awesome-icon icon="fa-solid fa-comments" />
              <span class="q_text"> Queries </span>
              <span class="badge q_badge">
                <strong>{{allQueires}}</strong>
              </span>
            </a>
            <span class="bar"> | </span>
            <span id="clock" class="pull-right clock">{{nowTime}}</span>
          </span>
          <span v-else>
            <a href="/">
              <span class="logout">
                <font-awesome-icon icon="fa-solid fa-right-from-bracket" /> Leave
              </span>
            </a>
            <span class="bar"> | </span>
            <span id="clock" class="pull-right clock">{{nowTime}}</span>
          </span>
        </div>
        <hr class="primary">
        <!-- @yield('dashboard') -->
        dashboard
        <div class="row">
          <!-- @yield('content') -->
          content
        </div>
      </div>

      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">times</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">Create QueryRoom</h4>
            </div>
            <form action="/home" method="post">
              <div class="modal-body">
                <div class="form-horizontal">
                  <div class="form-group">
                    <label for="name" class="col-sm-2 col-sm-offset-1 control-label">Title:</label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" name="name" placeholder="QueryRoom Title" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="like" class="col-sm-2 col-sm-offset-1 control-label">Max Like:</label>
                    <div class="col-sm-6">
                      <input type="number" min="0" class="form-control" name="like_max" placeholder="Max like count"
                        required>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary main_button">Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="modal fade" id="queryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-sm">
          <div class="modal-content" id="content-query">
            <div class="modal-header" id="query-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalL">Queries</h4>
            </div>
            <form action="/home" method="post">
              <div class="modal-body">
                <div class="form-horizontal">
                  <div class="form-group" id="list_title">
                    <label id="qroom" class="col-sm-2 col-sm-offset-1 control-label">Queryroom</label>
                    <label id="count_Q" class="col-sm-7 col-sm-offset-1 control-label">Queries</label>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-10 col-sm-offset-1">
                      <hr id="chatListHr">
                      <a class="chatroomList_button" href="/">
                        <div class="chatListdiv">
                          chatlist
                        </div>
                      </a>
                    </label>
                  </div>
                </div>
                <div class="modal-footer fixed">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainView',
  created () {
    setInterval(() => {
      this.nowTime = new Date().toLocaleTimeString('en-US')
    }, 1000)
  },
  methods: {
    toggleMenu(e) {
      e.preventDefault()
      this.isToggle = !this.isToggle
    }
  },
  data () {
    return {
      isToggle: true,
      nowTime: new Date().toLocaleTimeString('en-US'),
      isLogin: true,
      userType: 1,
      name: 'testuser',
      allQueires: 5,
      users: [
        {
          name: 'Apple',
          email: 'apple@gmail.com'
        }, {
          name: 'Samsung',
          email: 'samsung@gmail.com'
        }
      ]
    }
  }
}
</script>

<style>
@import '../assets/css/app.css';
@import '../assets/css/home.css';

.users {
  font-size: 20px;
  color: #dee2d9;
}
</style>
