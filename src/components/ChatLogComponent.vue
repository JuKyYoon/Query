<template>
  <div id="test">
    <div class="text-center" v-if="loaded == false"><i class="fa fa-spinner fa-spin fa-pulse"
        style="font-size:36px; margin-top:35%"></i></div>
    <div class="row" v-if="loaded == true" v-for="(message, index) in messages" v-bind:message="message"
      v-bind:key="message.id">
      <div class="col-sm-12">
        <div v-if="message.user_id == user.id">
          <div class="outline1 pull-right sub">
            <strong class="primary-font">
              {{ message.sender }}
            </strong><br>
            <span>{{ message.content }}</span><br>
            <!-- {{ likes }} -->

            <template v-if="likeCheck[index] == true">
              <span>{{ message.like }} <font-awesome-icon icon="fa-regular fa-thumbs-up" /></span>
            </template>
            <template v-else>
              <a class="like" v-on:click="toggleLike(message.id, message.like, index, message.content)">
                {{ message.like }} <font-awesome-icon icon="fa-solid fa-thumbs-up" /></a>
            </template>
            <span class="pull-right"> {{ message.created_at }}</span>
          </div>
        </div>
        <div v-else>
          <div class="outline pull-left">
            <strong class="primary-font">
              {{ message.sender }}
            </strong><br>
            <span>{{ message.content }}</span><br>
            <!-- {{ likes }} -->
            <template v-if="likeCheck[index] == true">
              <span>{{ message.like }} <font-awesome-icon icon="fa-regular fa-thumbs-up" /></span>
            </template>
            <template v-else>
              <a class="like" v-on:click="toggleLike(message.id, message.like, index, message.content)">
                {{ message.like }} <font-awesome-icon icon="fa-solid fa-thumbs-up" /></a>
            </template>
            <span class="pull-right"> {{ message.created_at }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['messages'],
  data() {
    return {
      like: [],
      likeCount: 0,
      user: "",
      url: "",
      likeCheck: [false, true],
      check: false,
      likes: [],
      loaded: true,

    }
  },


  created() {
    var currentUrl = (window.location.href).split('/');
    if (currentUrl[4] != null) {
      if (currentUrl[4].includes("?")) {
        this.url = currentUrl[4].substring(0, currentUrl.length);
        console.log(this.url);
      }
      else {
        this.url = currentUrl[4];
        console.log(this.url)
      }
    }
    console.log("on component");
    // axios.get('/auth').then(response => {
    //   this.user = response.data;
    //   axios.get('/chatroom/' + this.url + '/get/messages').then(response => {
    //     this.message = response.data;
    //     axios.get('/likes').then(response => {
    //       this.likes = response.data;
    //       for (let i = 0; i < this.message.length; i++) {
    //         Vue.set(this.likeCheck, i, false);
    //         //                    this.likeCheck[i] = false;
    //       }
    //       for (let i = 0; i < this.message.length; i++) {
    //         for (let j = 0; j < this.likes.length; j++) {
    //           if (this.message[i].id === this.likes[j].message_id) {
    //             Vue.set(this.likeCheck, i, true);
    //             //                            this.likeCheck[i] = true;
    //           }
    //         }
    //       }
    //       this.loaded = true;

    //     });
    //   });
    // });
  },
  methods: {
    toggleLike: function (i, j, k, content) {
      console.log("like count increase");
      console.log(i);
      console.log(j);
      console.log(k);
      console.log(this.likeCheck);
      Vue.set(this.likeCheck, k, true);
      this.$emit('likesent', {
        like: i,
        like_cnt: j,
        index: k,
        add: true,
        content: content,
        solve: 0,
        message_id: i,
      });

    },
    toggleRemove: function (i, j, k) {
      Vue.set(this.likeCheck, k, false);
      this.$emit('likesent', {
        like: i,
        like_cnt: j,
        index: k,
        add: false,
      });

    },




  }
}
</script>

