<template>
    <div class="world">
        <p>{{ inputdata }}</p>
        <input v-model="inputdata">
        <button>OK</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                inputdata: 'world'
            }
        }
    }
</script>