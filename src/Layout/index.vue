<template>
  <div class="layout-container">
    <Menu :isShow="isShow" />
    <main class="main-content" :class="{ on: isShow }">
      <Header :isShow="isShow" @show="handleShow" />
      <router-view />
      <Footer />
      <Nav :isShow="isShow" />
    </main>
  </div>
</template>

<script>
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Nav from "./Nav";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleShow(data) {
      this.isShow = data;
    },
  },
  watch:{
    $route(){
      this.isShow = false;
    }
  },
  components: {
    Header,
    Menu,
    Footer,
    Nav,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
.layout-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding-top: 53px;
  padding-bottom: 45px;
  box-sizing: border-box;
  .flex(flex-start);
  .main-content {
    height: 100%;
    width: 100%;
    position: relative;
    left: 0;
    transition: 0.4s;
    overflow-y: auto;
    &.on {
      left: 225px;
    }
  }
}
</style>