<template>
    <div class="world">
        <p>{{ inputdata }}</p>
        <input v-model="inputdata" id="item-input">
        <button v-on:click="addList">OK</button>
        <button v-on:click="show">show</button>
    </div>
    <ul>
        <li v-for="(index,item) in lists">
            {{ item.name }}
            <button v-on:click="deleteList(index,item)">X</button>
        </li>
    </ul>
</template>

<script>
    import $ from '../lib/jquery-2.2.3.min.js'
    import store from '../store'
    export default {
        data() {
            return {
                inputdata: 'world',
                lists: [
                    { name : 'wangxiaolin' },
                    { name : 'wangjiawa' }
                ]
            }
        },
        methods: {
            show: function(){
                store.getList(3).then(data => {
                    this.lists = data;
                }).catch(error => {
                    console.log(error);
                });
            },
            addList: function(){
                let new_item = $('#item-input').val();
                let item = { name : new_item };
                if(new_item){
                    this.lists.push(item);
                }
            },
            deleteList: function(index,item){
                //this.lists.$remove(item);
                this.lists.splice(index,1);
            },
            update: function(){
                this.lists = [
                    { name : 'wangxiaolin' },
                    { name : 'wangjiawa' },
                    { name : 'wangjiawa2' },
                    { name : 'wangjiawa3' }
                ];
            }
        }
    }
</script>