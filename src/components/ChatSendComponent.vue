<template>
  <div class="sendForm">
    <div class="inputForm">
      <input id="btn-input" type="text" name="message" class="form-control" placeholder="Type your message here..."
        v-model="newMessage" @keydown.enter="sendMessage">

    </div>
    <div class="buttonForm">
      <button v-if="button == 'activate'" class="btn btn-primary send_button" id="btn-chat" @click="sendMessage">
        Send
      </button>
    </div>

  </div>
</template>

<script>
export default {

  data() {
    return {
      newMessage: '',
      user: '',
      user_id: '',
      button: '',

    }
  },

  created() {
    console.log("----");

    // axios.get('/auth').then(response => {
    //   this.user = response.data.name;
    //   this.user_id = response.data.id;
    // });

    // var currentUrl = (window.location.href).split('/');
    // if (currentUrl[4] != null) {
    //   if (currentUrl[4].includes("?")) {
    //     this.url = currentUrl[4].substring(0, currentUrl.length);
    //     console.log(this.url);
    //   }
    //   else {
    //     this.url = currentUrl[4];
    //     console.log(this.url)
    //   }
    // }



  },
  updated() {
    if (this.newMessage.replace(/\s+/g, '').length != 0) {
      this.button = 'activate';
    }
    else {
      this.button = '';
    }
  },

  methods: {
    sendMessage() {
      var date = new Date();
      var components = [
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      ];

      var id = components.join("");
      var time2 = date.getHours() + ":" + date.getMinutes();
      console.log("sendmessage in vue component");
      console.log(time2);


      if (this.newMessage.replace(/\s+/g, '').length != 0) {
        this.$emit('messagesent', {
          content: this.newMessage,
          sender: this.user,
          like: 0,
          user_id: this.user_id,
          id: id,
          created_at: time2,
        });
      }
      this.newMessage = ''
    }
  }
}
</script>