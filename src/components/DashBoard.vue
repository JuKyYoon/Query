<template>
  <div>
    <div class="row">
      <div class="main_logo text-center">
        <h3 class="intro_title">Create <span><a data-toggle="modal" data-target="#myModal"
              class="create" v-on:click="openModal">Queryroom</a></span> to get questions from students</h3>
        <!-- {{ -- < div class= "main_logo" >
        <img src="{{ asset('imgs/main_logo.png') }}" style="width:10%; height:10%; margin-top:5%">
        </div> --}} -->
      </div>
    </div>

    <div class="row intro_main">
      <div class="col-sm-10 col-sm-offset-1">
        <div class="col-sm-4 text-center">
          <div class="intro_icon main_color">
            <font-awesome-icon icon="fa-solid fa-comments" size="4x"/>
            <!-- <i class="fa fa-comments-o fa-4x"></i> -->
          </div>
          <div class="intro_text">
            <h4>Name your Queryroom</h4>
            <p>Copy queryroom code and share to students.</p>
          </div>
        </div>
        <div class="col-sm-4 text-center">
          <div class="intro_icon main_color">
            <font-awesome-icon icon="fa-solid fa-thumbs-up" size="4x" />
          </div>
          <div class="intro_text">
            <h4>Choose maximum like count</h4>
            <p>Only message over this like count will consider as queries.</p>
          </div>
        </div>
        <div class="col-sm-4 text-center">
          <div class="intro_icon main_color">
            <font-awesome-icon icon="fa-solid fa-circle-check" size="4x"/>
          </div>
          <div class="intro_text">
            <h4>Check solved queries</h4>
            <p>You can check whether queries are solved or not.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  created () {

  },methods: {
    openModal () {
      this.$emit('openModal')
    }
  }
}
</script>

<style>
@import '../assets/css/dashboard.css';

</style>
