<template>
  <div class="header-container" :class="{on:isShow}">
    <h1 class="title">使用教程</h1>
    <div class="menu" @click="toggleMenu" :class="{ on: isShow }">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleMenu() {
        this.$emit("show", !this.isShow);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
.header-container {
  height: 52px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  .flex(flex-start);
  border-bottom: 1px solid #eee;
  background-color: #fff;
  padding: 0 10px;
  transition: .4s;
  &.on{
    transform: translateX(225px);
  }
  .menu {
    position: absolute;
    width: 30px;
    height: 30px;
    .flex();
    flex-direction: column;
    background-color: #000;
    border-radius: 50%;
    span {
      display: block;
      width: 15px;
      height: 2px;
      background-color: #fff;
      margin-bottom: 3px;
      transition: .6s;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &.on {
      span {
        border-radius: 2px;
        &:nth-child(1) {
          transform: translateY(5px) rotate(45deg);
        }
        &:nth-child(3) {
          transform: translateY(-5px) rotate(-45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
      }
    }
  }
  .title {
    text-align: center;
    width: 100%;
    font-size: 17.5px;
    color: #333;
    font-weight: 400;
  }
}
</style>