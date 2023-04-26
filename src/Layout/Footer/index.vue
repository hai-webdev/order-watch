<template>
  <div class="footer-container">
    {{ copyright }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("site/getCopyright");
  },
  computed: {
    ...mapState({
      copyright: (state) => state.site.copyright,
    }),
  },
};
</script>

<style lang="less" scoped>
.footer-container {
  background-color: #f5f5f5;
  padding: 20px 0 30px;
  text-align: center;
  color: #999;
}
</style>