<template>
  <div
    class="icon-container iconfont"
    :style="{ fontSize: size + 'px' }"
    :class="'icon-' + classType"
  ></div>
</template>

<script>
const iconClass = {
    home:"31shouyexuanzhong",
    about:"moban",
    email:"youxiang",
    ios:"pingguo",
    android:"anzhuo"
}
export default {
  props: {
    size: {
      type: Number,
      default: 40,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed:{
    classType(){
        return iconClass[this.type];
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/iconfont.css";
</style>