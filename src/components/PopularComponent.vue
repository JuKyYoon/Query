<template>
  <div>
    <div class="row popular animated fadeIn" v-for="(popular, index) in populars" v-bind:popular="popular"
      v-bind:key="popular.id">
      <div class="col-sm-12">
        <div class="q_wrapper">
          <div class="rank_area">
            <p class="rankNumber">{{ index + 1 }}</p>
          </div>
          <div class="q_area">
            <p class="popQuestion">{{ popular.content }}</p>

          </div>
          <div class="button_area">
            <div class="pretty p-icon p-round p-smooth">
              <input type="checkbox" @change="solve(popular.message_id)" v-if="popular.solve === 1" checked>
              <input type="checkbox" @change="solve(popular.message_id)" v-else>
              <!-- <div class="state p-success main">
                <font-awesome-icon icon="fa-solid fa-check icon icon2" />
                <label></label> -->
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
  props: ['populars'],

  mounted() {
    console.log('Component mounted.')
  },

  created() {
    // axios.get('/auth').then(response => {
    //   this.user = response.data;
    // });

  },

  methods: {

    solve: function (i) {
      console.log(i);
      this.$emit('popularsent', {
        message_id: i,
      });
    },
  }
}
</script>

<style>

</style>
