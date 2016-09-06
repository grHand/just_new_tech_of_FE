<template>
    <div class="nav-links">
        <a v-link="{ path: '/index/foods/1' }">美食列表</a>
        <a v-link="{ path: '/index/shops/1' }">店家列表</a>
    </div>
    <router-view
    ></router-view>
</template>

<style>
    .nav-links .v-link-active{
        color: #666;
    }
</style>