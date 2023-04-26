<template>
  <div class="more-container">
    <ul class="more-list">
      <li class="more-item" v-for="i in 3" :key="i">
        <img :src="img" alt="" />
        <span>?</span>
      </li>
    </ul>
    <p class="note">更多产品正在陆续更新中·敬请期待</p>
    <router-link to="/message" class="link">我有意见提</router-link>
  </div>
</template>

<script>
import img from "@/assets/images/watch.png";
export default {
  data() {
    return {
      img,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
.more-container {
  margin-bottom: 40px;
}
.more-list {
  .flex(space-around);
  padding: 20px 0;
  .more-item {
    width: 107px;
    height: 186px;
    position: relative;
    img {
      width: 107px;
      height: 186px;
    }
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .flex();
      z-index: 2;
      color: #fff;
      font-size: 100px;
      margin-left: -5px;
    }
  }
}
.note {
  text-align: center;
  font-size: 16.5px;
  color: #666;
  margin-bottom: 45px;
}
.link {
  .flex();
  margin: 0 auto;
  font-size: 20px;
  width: 360px;
  height: 48px;
  border-radius: 20px;
  border: 1px solid #eb1d4e;
  color: #eb1d4e;
  font-weight: bold;
}
</style>