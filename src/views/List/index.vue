<template>
  <div class="list-container">
    <a :href="sort.link" class="download">点我下载APP</a>
    <div class="links">
      <router-link
        v-for="item in nav"
        :key="item.id"
        class="link"
        :to="{ name: $route.name, query: { scode: item.scode } }"
        >{{ item.name }}</router-link
      >
      <!-- <router-link class="link" to="">安卓手机点这里</router-link> -->
    </div>
    <div
      class="title"
      v-for="item in nav"
      :key="item.id"
      v-show="item.scode === $route.query.scode"
    >
      {{ item.def1 }}
    </div>
    <ul class="list">
      <li
        class="item"
        v-for="item in list"
        :key="item.id"
        :style="{ backgroundColor: item.titlecolor }"
      >
        <router-link :to="{ name: 'Content', params: { id: item.id } }">
          <p>{{ item.title }}</p>
          <img v-if="item.ico" :src="item.ico" :alt="item.title" class="icon" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import getNav from "@/api/getNav";
import {getScodeInfo} from "@/api/getScode";
import getList from "@/api/getList";
export default {
  data() {
    return {
      nav: [],
      list: [],
      sort:{}
    };
  },
  async created() {
    this.getScode();
    this.getNavList();
    this.getDataList();
  },
  methods: {
    async getScode() {
      const sort = await getScodeInfo(this.$route.meta.scode);
      console.log(sort);
      this.$set(this.sort, "link", sort.data.def2)
    },
    async getNavList() {
      const nav = await getNav(this.$route.meta.scode);
      this.nav.splice(0, this.nav.length, ...nav.data);
    },
    async getDataList() {
      const list = await getList({
        scode: this.$route.query.scode
          ? this.$route.query.scode
          : this.$route.meta.scode,
        num: 1000,
      });
      const data = list ? list.data : [];
      this.list.splice(0, this.list.length, ...data);
    },
  },
  watch: {
    async $route() {
      this.getScode();
      this.getNavList();
      this.getDataList();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
.list-container {
  padding: 22px 10px;
  box-sizing: border-box;
  .download {
    width: 100%;
    height: 60px;
    .flex();
    background-color: #42bd56;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    margin-bottom: 35px;
  }
  .links {
    .flex(space-around);
    margin-bottom: 40px;
    .link {
      .flex();
      width: 160px;
      height: 46px;
      font-size: 16px;
      color: #fff;
      border-radius: 6px;
      &:nth-child(1) {
        background-color: #3285ff;
      }
      &:nth-child(2) {
        background-color: #f23030;
      }
    }
  }
  .title {
    font-size: 21px;
    text-align: center;
    font-weight: bold;
    color: #3285ff;
    margin-bottom: 35px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      a{
        width: 100%;
        height: 100%;
        .flex(space-between);
      }
      .flex(space-between);
      padding: 0 15px;
      box-sizing: border-box;
      border-radius: 6px;
      height: 65px;
      width: calc(50% - 8px);
      margin-bottom: 16px;
      p {
        font-size: 14px;
        color: #fff;
      }
      &:nth-child(2n + 1) {
        margin-right: 8px;
      }
      &:nth-child(2n + 2) {
        margin-left: 8px;
      }
    }
  }
}
</style>