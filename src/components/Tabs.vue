<template>
  <div>
    <van-tabbar v-model="active" active-color="#b4282d">
      <van-tabbar-item class="iconfont icon-shouye" to='/home'>首页</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-fenlei" to='/list'>分类</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-tupian" to='/see'>识物</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-gouwuche-01" to='/cat'>购物车</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-geren" to='/center'>个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>
  .icon-shouye:before {
    content: "\e606";
    font-size: 18px;
  }
  .icon-fenlei:before {
    content: "\e659";
    font-size: 18px;
  }
  .icon-tupian:before {
    content: "\e695";
    font-size: 18px;
  }
  .icon-gouwuche-01:before {
    content: "\e695";
    font-size: 18px;
  }
  .icon-geren:before {
    content: "\e695";
    font-size: 18px;
  }
</style>
