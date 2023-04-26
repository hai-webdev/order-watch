<template>
  <div class="about-container">
    <div class="title">{{ about.title }}</div>
    <div class="content">
      <img :src="about.ico" :alt="about.title" class="ico" />
      <div class="text" v-html="about.content"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("about/getData");
  },
  computed: {
    ...mapState({
      about: (state) => state.about.data,
    }),
  },
};
</script>

<style lang="less" scoped>
.about-container {
  padding-top: 12px;
  text-align: center;
  .title {
    font-size: 15px;
    padding: 12px 0;
    color: #333;
    text-align: center;
    font-weight: bold;
    display: inline-block;
    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 1px;
      top: 50%;
      background-color: #999;
    }
    &::before {
      left: -20px;
    }
    &::after {
      right: -20px;
    }
  }
  .content {
    border-top: 1px solid #f3f3f3;
    width: 340px;
    margin: 0 auto;
    padding-bottom: 30px;
    img {
      max-width: 100%;
      border-radius: 6px;
      margin-bottom: 10px;
    }
    .text{
        text-align: initial;
        font-size: 14px;
        color:#666;
        line-height: 1.5;
        text-indent: 2em;
        /deep/ p{
            margin-bottom: 10px;
        }
        /deep/ img{
            max-width: 100%;
        }
    }
  }
}
</style>