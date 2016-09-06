<template>
    <div class="foodlist">
        <li v-for="(index,item) in foodlist">
            <span>{{ item.foodname }}</span>
            <span class="cart-add" v-if="!item.state" v-on:click="toogle_add(index)">+</span>
            <span class="cart-added" v-if="item.state" v-on:click="toogle_add(index)">x</span>
        </li>
    </div>
</template>

<script>
    import $ from '../lib/jquery-2.2.3.min.js'
    export default {
        data(){
            return {
                curIndex: 0,
                foodlist: [
                    { 'foodname' : 'food1' , 'state' : false },
                    { 'foodname' : 'food2' , 'state' : true },
                    { 'foodname' : 'food3' , 'state' : true },
                    { 'foodname' : 'food4' , 'state' : false },
                    { 'foodname' : 'food5' , 'state' : false },
                ]
            }
        },
        route: {
            data({ to }){
                //console.log(to);
            }
        },
        methods: {
            toogle_add: function(index){
                this.curIndex = index;
                if(this.foodlist[index].state){
                    // 已经添加
                    this.$dispatch('remove', index+'remove');
                }else{
                    this.$dispatch('add', index+'add');
                }
                this.foodlist[index].state = !this.foodlist[index].state;
            }
        },
        ready: function(){
            var count = 0;
            for(let i=0;i<this.foodlist.length;i++){
                if(this.foodlist[i].state){
                    count++;
                }
            }
            this.$dispatch('initCount', count);
        }
    }
</script>

<style>
    .foodlist>li{
        list-style: none;
        padding: 10px 15px;
        border-bottom: 1px solid #ddd;
    }
    .cart-add{
        width: 20px;
        height: 20px;
        background: #1e7ac3;
        color: #fff;
        text-align: center;
        line-height: 20px;
        display: inline-block;
        border-radius: 10px;
        position: absolute;
        right: 15px;
    }
    .cart-added{
        width: 20px;
        height: 20px;
        background: #cf484c;
        color: #fff;
        text-align: center;
        line-height: 20px;
        display: inline-block;
        border-radius: 10px;
        position: absolute;
        right: 15px;
    }
</style>