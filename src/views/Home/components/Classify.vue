<template>
  <div class="classify-container">
      <transition-group tag="ul" class="classify-list" name="animate__animated animate__flipInY"
        enter-active-class="animate__flipInY"    
        leave-active-class="animate__flipInY">
      <li class="classify-item" v-for="item in proNavList" :key="item.id">
        <img :src="item.ico" :alt="item.name" />
        <div class="btns" v-if="item.son && item.son.length">
          <router-link v-for="it in item.son" :key="it.id" :to="{
            name:it.subname,
            query:{
              scode:it.scode
            }
          }">{{
            it.name
          }}</router-link>
        </div>
      </li>
      </transition-group>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("home/getProNav");
  },
  computed: {
    ...mapState({
      proNavList: (state) => state.home.proNav,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
.classify-list {
  padding: 10px 0;
  .classify-item {
    position: relative;
    img {
      width: 100%;
    }
    .btns {
      position: absolute;
      z-index: 2;
      right: 40px;
      bottom: 15px;
      a {
        .flex();
        width: 154px;
        height: 34px;
        border-radius: 17px;
        color: #fff;
        font-size: 16.4px;
        &:nth-child(1) {
          background-color: #3285ff;
          margin-bottom: 12px;
        }
        &:nth-child(2) {
          background-color: #f23030;
        }
      }
    }
  }
}
</style>