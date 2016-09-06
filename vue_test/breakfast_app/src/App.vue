<template>
  <div>
    <div class="nav-header">
      <i class="icon-back"></i>
      <div class="search-form">
        <input >
        <span>搜索</span>
      </div>
    </div>
    <router-view>
    </router-view>
    <div class="nav-footer">
      <div class="col-3">
        <a v-link="{ path: '/index' }">首页</a>
      </div>
      <div class="col-3">
        <a v-link="{ path: '/shopcart' }">购物车 <b>({{ cart_count }})</b></a>
      </div>
      <div class="col-3">
        <a v-link="{ path: '/userinfo' }">我的信息</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        cart_count: 0
      }
    },
    events: {
      'remove': function(msg){
        this.cart_count--;
      },
      'add': function(msg){
        this.cart_count++;
      },
      'initCount': function(count){
        this.cart_count = count;
      }
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  margin: 0px;
}
a{
  text-decoration: none;
  color: #ddd;
}
.icon-back{
  width: 11px;
  height: 30px;
  margin-top: 10px;
  float: left;
  background: url('./static/images/icon-back.png') no-repeat;
  background-size: 100%;
}
.nav-header{
  height: 40px;
  line-height: 40px;
  padding: 0px 15px;
  background: #1e7ac3;
}
.search-form{
  float: right;
}
.search-form>input{
  height: 15px;
  padding: 4px 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
}
.search-form>span{
  font-size: 12px;
  color: #fff;
}
.nav-links{
  padding: 5px 15px;
  border-bottom: 1px solid #ddd;
}
.nav-links>a{
  margin-right: 10px;
  font-size: 13px;
  color: #1e7ac3;
}
.nav-footer{
  width: 100%;
  height: 40px;
  background: #1e7ac3;
  position: fixed;
  bottom: 0px;
}
.col-3{
  width: 33.3%;
  float: left;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
  color: #fff;
}
.nav-footer .v-link-active{
  color: #fff;
}
</style>
