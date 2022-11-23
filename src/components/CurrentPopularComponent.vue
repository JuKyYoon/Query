<template>
  <div id="num5" class="num5">
    <strong class="queries">{{ query_unsolved }} / </strong>
    <strong class="queries">{{ queries }}</strong>
  </div>
</template>

<script>
export default {
  props: ['queries', 'query_unsolved'],
  data() {
    return {
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="css">
.queries {
  font-size: 38px;
  font-weight: bold;
  color: white;
}
</style>
