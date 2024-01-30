<!--  -->
<template>
  <div class="">
    PageOne<br />
    <button @click="test">导出PDF</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    test() {
      alert("导出PDF");
    },
  },
};
</script>

<style scoped>
/*@import url(); 引入公共css类*/
</style>