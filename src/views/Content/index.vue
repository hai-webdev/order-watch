<template>
  <div class="content-container">
    <h1 class="title">{{rs.title}}</h1>
    <video v-if="rs.enclosure" :src="rs.enclosure" controls></video>
  </div>
</template>

<script>
import getContent from "@/api/getContent"
export default {
  data(){
    return {
      rs:{}
    }
  },
  async created(){
    const resp = await getContent({id:this.$route.params.id})
    this.rs = resp.data;
    console.log(this.rs);
  }
}
</script>

<style lang="less" scoped>

</style>