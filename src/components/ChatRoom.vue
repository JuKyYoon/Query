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
        <popular-component v-on:popularsent="addPopular" :populars="populars"></popular-component>
      </div>
    </div>
    <div class="col-sm-7 chat_section">
      <div class="chat_header">
        <div class="title_section" v-if="userType == 1">
          <a data-toggle="modal" data-target="#chatname_modal" v-on:click="() => openModal('chatname')">
            <!-- 클릭시 채팅방 이름 변경 모달 표시 -->
            <h3 class="chat_title_hvr">채팅방이름</h3>
          </a>

          <span>
            <font-awesome-icon icon="fa-solid fa-link" />
            <a tabindex="0" class="clipboard like" id="copy" data-trigger="focus" data-clipboard-target="#copy"
              data-toggle="popover" data-placement="right" v-tooltip="{ content: 'You copied the code.', show: copied, trigger: 'manual'}" aria-label="You copied the code.">{{ cid }}</a>
          </span>

          <a class="pull-right" style="margin-top:1%" data-toggle="modal" data-target="#del_button"
            v-on:click="() => openModal('delchatroom')">
            <!-- 클릭 시 삭제 모달? -->
            <font-awesome-icon id="delButton" icon="fa-solid fa-trash-can" />
          </a>
        </div>
        <div class="title_section" v-else>
          <h3 class="chat_title">채팅방이름</h3>
          <span>
            <font-awesome-icon icon="fa-solid fa-link" />
            <a tabindex="0" class="clipboard like" id="copy" data-trigger="focus" data-clipboard-target="#copy"
              data-toggle="popover" data-placement="right" v-tooltip="{ content: 'You copied the code.', show: copied, trigger: 'manual'}" aria-label="You copied the code.">{{ cid }}</a>
          </span>
        </div>
      </div>
      <!-- 클릭시 공지사항 모달 -->
      <a data-toggle="modal" data-target="#notice_modal" v-if="userType == 1" v-on:click="() => openModal('notice')">
        <div class="notice_section">
          <font-awesome-icon icon="fa-solid fa-bullhorn" class="notice_text" aria-hidden="true" />
          <span class="notice_text" v-if="notice === ''">Click here to add notice!</span>
          <span class="notice_text" v-else>{{ notice }}</span>
        </div>
      </a>
      <div class="notice_section_2" v-else>
        <font-awesome-icon icon="fa-solid fa-bullhorn" class="notice_text" aria-hidden="true" />
        <span class="notice_text" v-if="notice === ''">There is no notice yet.</span>
        <span class="notice_text" v-else>{{ notice }}</span>
      </div>

      <div class="chat_body" id="chat_body">
        <chat-log-component v-on:likesent="addLike" :messages="messages"></chat-log-component>
      </div>
      <div class="row">
        <div class="chat_footer">
          <chatsend-component v-on:messagesent="addMessage"></chatsend-component>
        </div>
      </div>
    </div>

    <div class="modal-open" v-if="isModal == 'chatname'" id="chatname_modal" tabindex="-1" role="dialog"
      aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"
                v-on:click="closeModal">&times;</span>
            </button>
            <h4 class="modal-tfitle" id="myModalLabel">Modify Queryroom</h4>
          </div>
          <form method="post">
            <div class="modal-body">
              <div class="form-horizontal">
                <div class="form-group">
                  <label for="chatname" class="col-sm-2 col-sm-offset-1 control-label">Name:</label>
                  <div class="col-sm-6">
                    <input type="text" value="채팅방이름" class="form-control" name="name"
                      placeholder="Enter query room's name" required>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal"
                  v-on:click="closeModal">Cancel</button>
                <button type="submit" class="btn btn-primary main_button">Modify</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="modal-open" id="notice_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true" v-if="isModal == 'notice'">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"
                v-on:click="closeModal">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">Add Notice</h4>
          </div>
          <form method="post">
            <div class="modal-body">
              <div class="form-horizontal">
                <div class="form-group">
                  <label for="name" class="col-sm-2 col-sm-offset-1 control-label">Notice:</label>
                  <div class="col-sm-6">
                    <input type="text" :value="notice" class="form-control" name="notice"
                      placeholder="Enter query room's notice" required>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal"
                  v-on:click="closeModal">Close</button>
                <button type="submit" class="btn btn-primary main_button">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="modal-open" id="del_button" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true" v-if="isModal == 'delchatroom'">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"
                v-on:click="closeModal">&times;</span>
            </button>
            <h4 class="modal-title" id="delModalLabel">Delete Chatroom</h4>
          </div>
          <form method="post">
            <div class="modal-body">
              <div class="form-horizontal">
                <div class="form-group" id="form-group-del">
                  <font-awesome-icon icon="fa-solid fa-circle-exclamation" />Are you sure to delete 채팅방이름?
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal"
                  v-on:click="closeModal">Cancel</button>
                <button type="button" class="btn btn-primary main_button">Delete</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentPopularComponentVue from '@/components/CurrentPopularComponent.vue';
import ChatsendComponent from '@/components/ChatSendComponent.vue';
import ChatLogComponent from './ChatLogComponent.vue';
import PopularComponent from '@/components/PopularComponent.vue'
import ClipboardJS from 'clipboard'
export default {
  components: { CurrentPopularComponentVue, ChatsendComponent, ChatLogComponent, PopularComponent },
  name: 'ChatRoom',
  created() {
    let clipboard = new ClipboardJS('.clipboard');
    clipboard.on('success', (e) => {
      e.clearSelection();
      console.log("copied")
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
        console.log('close')
      }, 600);
    })

    clipboard.on('error', function (e) {
      console.log("COPY Fail");
    });
  },
  methods: {
    addMessage() {
      alert("send message axios")
    },
    addLike(like) {
      console.log(like)
    },
    addPopular() {
      // 상태에 따라 allquery 증감, query_unsolved 증감
      console.log("addpopular")
    },
    openModal(type) {
      this.isModal = type
    },
    closeModal() {
      this.isModal = 'none'
    }
  },
  data() {
    return {
      tooltipContent: 'copied',
      copied: false,
      isModal: 'none',
      populars: [
        {
          id: 'av24',
          content: 'mycon1',
          solve: 1,
          message_id: 'r14zdf'
        },
        {
          id: 'zcv1z',
          content: 'mycon2',
          solve: 0,
          message_id: 'qewr'
        }
      ],
      cid: this.$route.params.cid,
      queries: 5,
      query_unsolved: 3,
      people: 10,
      userType: 1,
      notice: '내가 공지사항',
      messages: [
        {
          id: 'mid',
          sender: '보낸 사람',
          content: '메시지 내용',
          solve: false,
          user_id: 'id',
          like: 3,
          created_at: '19:12'
        },
        {
          id: 'mid2',
          sender: '보낸 사람2',
          content: '메시지 내용2',
          solve: true,
          user_id: 'id',
          like: 7,
          created_at: '19:12'
        }
      ]

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

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, .1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
</style>
