<template>
  <div class="message-container">
    <img :src="data.ico" alt="" class="banner" />
    <div class="title">● 新品意见</div>
    <form class="form" @submit.prevent="formSubmit">
      <label for="" class="required">
        <input type="text" placeholder="姓名" v-model="form.xm" />
      </label>
      <label for="">
        <input type="text" placeholder="电话" v-model="form.dh" />
      </label>
      <label for="" class="required">
        <textarea placeholder="内容" v-model="form.nr"></textarea>
      </label>
      <button type="submit" class="submit">立即提交</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import postMsg from "@/api/postMsg"
export default {
  data(){
    return {
      form:{
        xm:"",
        dh:"",
        nr:""
      }
    }
  },
  created() {
    this.$store.dispatch("message/getData");
  },
  computed: {
    ...mapState({
      data: (state) => state.message.data,
    }),
  },
  methods:{
    async formSubmit(){
      const that = this;
      const resp = await postMsg(this.form);
      if(resp && resp.data){
         this.$message({
          message: resp.data,
          type: 'success',
          onClose(){
            that.form.xm = "";
            that.form.dh = "";
            that.form.nr = "";
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.message-container {
  .banner {
    max-width: 100%;
    margin-bottom: 30px;
  }
  .title {
    padding: 0 17px;
    font-size: 16px;
    line-height: 48px;
    height: 48px;
    color: #ff7214;
  }
  .form {
    border-top: 1px solid #e3e2e8;
    display: block;
    padding: 17px;
    box-sizing: border-box;
    label {
      width: 100%;
      display: block;
      position: relative;
      margin-bottom: 17px;
      &.required {
        &::before {
          content: "*";
          position: absolute;
          left: 7px;
          top: 20px;
          color:#f00;
          font-size: 16px;
        }
      }
      input,
      textarea {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid #e3e2e8;

        font-size: 16px;
        padding-left: 15px;
        &::placeholder {
          font-family: "微软雅黑";
        }
      }
      input {
        height: 52px;
      }
      textarea {
        height: 88px;
        padding-top: 11px;
      }
    }
    .submit{
        width: 100%;
        height: 48px;
        background-color: #ff7214;
        opacity: 0.5;
        border:none;
        color:#fff;
        font-size: 16.5px;
    }
  }
}
</style>