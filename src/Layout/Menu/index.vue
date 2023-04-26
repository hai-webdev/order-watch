<template>
  <div class="menu-container" :class="{ on: isShow }">
    <nav class="nav-list">
      <router-link class="nav-item" to="/">
        <Icon type="home" />
        <p>首页</p>
      </router-link>
      <router-link class="nav-item" to="/about">
        <Icon type="about" />
        <p>关于我们</p>
      </router-link>
      <router-link class="nav-item" to="/message">
        <Icon type="email" />
        <p>有建议我要提</p>
      </router-link>
    </nav>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
.menu-container {
  position: absolute;
  left: -225px;
  z-index: 99;
  width: 225px;
  height: 100%;
  background-color: #181f25;
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;
  transition: 0.4s;
  &.on {
    left: 0;
  }
  .nav-list {
    .nav-item {
      height: 52px;
      padding: 0 25px;
      .flex(flex-start);
      color: #8f9bb0;
      p {
        margin-left: 15px;
        font-size: 14px;
      }
      &.router-link-exact-active {
        background-color: #1d262e;
        color: #fff;
      }
    }
  }
}
</style>