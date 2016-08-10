<template>
    <div class="world">
        <p>{{ inputdata }}</p>
        <input v-model="inputdata" id="item-input">
        <button v-on:click="add">OK</button>
    </div>
    <ul>
        <li v-for="(index,item) in lists" v-on:click="show" data-index="{{ index }}">
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
    import $ from '../lib/jquery-2.2.3.min.js'
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
                
            },
            add: function(){
                let new_item = $('#item-input').val();
                let item = { name : new_item };
                if(new_item){
                    this.lists.push(item);
                }
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