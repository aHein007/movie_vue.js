<template>
    <div class="container flex justify-center ">
        
        <div class="bg-gray-700 w-6/12 h-96 shadow-2xl text-gray-300 overflow-y-scroll " ref="scroll">
            <div class="p-8 border-b border-gray-600" v-for="oneMessage in timeFormat" :key="oneMessage">
                <span class="text-sm text-green-700">{{ oneMessage.created_at }}</span>
                <div class="text-lg mt-1 text-blue-500">{{ oneMessage.name }}</div>
                <div class="text-md mt-3 text-gray-300">{{ oneMessage.messages }}</div>
            </div>

            
        </div>
    </div>
</template>

<script>
import showMessage from '../composable/showMessage';
import { computed, onMounted, onUpdated,  ref } from '@vue/runtime-core';
import {formatDistanceToNow} from "date-fns"
export default {
    setup(){
        let scroll =ref(null);

        onMounted(()=>{
           
            scroll.value.scrollTop = scroll.value.scrollHeight
        })

        onUpdated(()=>{
          scroll.value.scrollTop = scroll.value.scrollHeight
          window.Reflect
        })

        let timeFormat =computed(()=>{
            return allmessage.value.map((message)=>{
             let time = formatDistanceToNow(message.created_at.toDate())
               return {...message,created_at:time}
            })
        })

       let {error,suggestMessage,allmessage} =showMessage()
       suggestMessage()
      


        return {scroll,allmessage,error,timeFormat}
    }
}
</script>

<style>
::-webkit-scrollbar{
    width: 8px;
    
}

::-webkit-scrollbar-track{
    background-color: rgb(233, 233, 233);
}

::-webkit-scrollbar-thumb{
    background-color: gray;
}


</style>