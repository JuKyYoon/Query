<template>
  <div>
    <div class="col-sm-5 selected">
      <br>
      <div class="row info_section">
        <div class="col-sm-6 col-xs-6">
          <div class="chatroom_status">
            <div class="icon">
              <font-awesome-icon icon="fa-solid fa-users" size="7x" />
            </div>
            <div id="currentuser" class="currentuser">
              <div id="num3" class="num3">
                <strong class="people">{{ people }}</strong>
              </div>
            </div>
            <p>Query room users</p>
          </div>
        </div>
        <div class="col-sm-6 col-xs-6">
          <div class="chatroom_status sub">
            <div class="icon">
              <font-awesome-icon icon="fa-solid fa-circle-question" size="7x" />
            </div>
            <div id="currentquery" class="currentquery">
              <current-popular-component-vue :queries="queries" :query_unsolved="query_unsolved">
              </current-popular-component-vue>
            </div>
            <p>Unsolved / Total Queries</p>
          </div>
        </div>
      </div>
      <div class="popular_top">We wonder...</div>
      <hr id="top_hr">
      <div class="popular_section" id="pop_h">
        <!-- <popular-component v-on:popularsent="addPopular" :populars="populars"></popular-component> -->
      </div>
    </div>
    <div class="col-sm-7 chat_section">
      <div class="chat_header">
        <div class="title_section" v-if="userType == 1">
          <a data-toggle="modal" data-target="#chatname_modal">
            <h3 class="chat_title_hvr">채팅방이름</h3>
          </a>

          <span>
            <font-awesome-icon icon="fa-solid fa-link" />
            <a tabindex="0" class="clipboard like" id="copy" data-trigger="focus" data-clipboard-target="#copy"
              data-toggle="popover" data-placement="right" data-content="You copied the code.">{{ cid }}</a>
          </span>

          <a class="pull-right" style="margin-top:1%" data-toggle="modal" data-target="#del_button">
            <font-awesome-icon id="delButton" icon="fa-solid fa-trash-can" />
          </a>
        </div>
        <div class="title_section" v-else>
          <h3 class="chat_title">채팅방이름</h3>
          <span>
            <font-awesome-icon icon="fa-solid fa-link" />
            <a tabindex="0" class="clipboard like" id="copy"
              data-trigger="focus" data-clipboard-target="#copy" data-toggle="popover" data-placement="right"
              data-content="You copied the code.">{{ cid }}</a>
          </span>
        </div>
      </div>
      <a data-toggle="modal" data-target="#notice_modal" v-if="userType==1">
        <div class="notice_section">
          <font-awesome-icon icon="fa-solid fa-bullhorn" class="notice_text" aria-hidden="true"/>
          <span class="notice_text" v-if="notice === ''">Click here to add notice!</span>
          <span class="notice_text" v-else>{{notice}}</span>
        </div>
      </a>
      <div class="notice_section_2" v-else>
        <font-awesome-icon icon="fa-solid fa-bullhorn" class="notice_text" aria-hidden="true"/>
        <span class="notice_text" v-if="notice === ''">There is no notice yet.</span>
        <span class="notice_text" v-else>{{notice}}</span>
      </div>

      <!-- <div class="chat_body" id="chat_body">
        <chatlog-component v-on:likesent="addLike" :messages="messages"></chatlog-component>
      </div> -->
      <div class="row">
        <div class="chat_footer">
          <chatsend-component v-on:messagesent="addMessage"></chatsend-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentPopularComponentVue from '@/components/CurrentPopularComponent.vue';
import ChatsendComponent from '@/components/ChatSendComponent.vue';
export default {
  components: { CurrentPopularComponentVue, ChatsendComponent },
  name: 'ChatRoom',
  created() {
    console.log(this.$route.params)
  },
  methods: {
    addMessage () {
      alert("send message axios")
    }
  },
  data() {
    return {
      cid: this.$route.params.cid,
      queries: 5,
      query_unsolved: 3,
      people: 10,
      userType: 1,
      notice: ''
    }
  }
}
</script>

<style>
@import '../assets/css/chatroom.css';

.people {
  font-size: 38px;
  font-weight: bold;
  color: white;
}
</style>
