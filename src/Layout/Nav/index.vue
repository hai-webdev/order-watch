<template>
  <div class="nav-container">
    <router-link
      :to="{
        name: 'Android',
        query: {
          scode: 6,
        },
      }"
      class="link android"
    >
      <Icon type="android" />
      <p>安卓教程</p>
    </router-link>
    <router-link to="/" class="link home">
      <Icon type="home" />
      <p>首页</p>
    </router-link>
    <router-link
      :to="{
        name: 'Ios',
        query: {
          scode: 8,
        },
      }"
      class="link ios"
    >
      <Icon type="ios" />
      <p>苹果教程</p>
    </router-link>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
.nav-container {
  border-top: 1px solid #f4f4f4;
  height: 44px;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  position: fixed;
  .flex();
  .link {
    width: calc(100% / 3);
    .flex();
    flex-direction: column;
    color: #7b8196;
    p {
      font-size: 10px;
      margin-top: 3px;
    }
    &.home {
      .icon-container {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        color: #fff;
        .flex();
        margin-top: -21px;
        background-color: #f23030;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: -4px;
          top: -4px;

          z-index: -1;
          width: 50px;
          height: 50px;
          background-color: #fff;
          border-radius: 50%;
        }
      }
    }
    &.router-link-active {
      color: #f23030;
    }
  }
}
</style>