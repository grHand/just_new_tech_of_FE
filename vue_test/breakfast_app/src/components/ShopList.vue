<template>
    <div class="shoplist">
        <li v-for="(index,item) in shoplist">
            <span>{{ item.shopname }}</span>
            <i v-bind:class="[ item.state ? 'icon-collect-cancel' : 'icon-collect' ]" v-on:click="toggle_collect(index)"></i>
        </li>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                shoplist: [
                    { 'shopname' : 'shop1', 'state' : false },
                    { 'shopname' : 'shop2', 'state' : true },
                    { 'shopname' : 'shop3', 'state' : false },
                    { 'shopname' : 'shop4', 'state' : false },
                    { 'shopname' : 'shop5', 'state' : false },
                ]
            }
        },
        methods: {
            toggle_collect: function(index){
                this.shoplist[index].state = !this.shoplist[index].state;
            }
        }
    }
</script>

<style>
    .shoplist>li{
        list-style: none;
        padding: 10px 15px;
        position: relative;
        border-bottom: 1px solid #ddd;
    }
    .icon-collect{
        width: 20px;
        height: 20px;
        background: url('./static/images/icon-collect.png') no-repeat;
        background-size: 90%;
        display: inline-block;
        position: absolute;
        right: 15px;
    }
    .icon-collect-cancel{
        width: 20px;
        height: 20px;
        background: url('./static/images/icon-collect-cancel.png') no-repeat;
        background-size: 90%;
        display: inline-block;
        position: absolute;
        right: 15px;
    }
</style>