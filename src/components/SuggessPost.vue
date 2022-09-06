<template>
    <div class="container flex justify-center ">
        <div class="bg-gray-700 w-6/12 h-96 shadow-2xl text-gray-300 overflow-y-scroll " ref="scroll">
            <div class="p-8 border-b border-gray-600">
                <span class="text-sm text-green-700">3 min ago</span>
                <div class="text-lg mt-1 text-blue-500">Aung Thu Hein</div>
                <div class="text-md mt-3 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit repellat inventore quaerat beatae illo eius possimus nisi quod, a quidem iusto rem quisquam incidunt numquam! Quaerat quisquam reprehenderit placeat ex?</div>
            </div>

            <div class="p-8 border-b border-gray-600">
                <span class="text-sm text-green-700">3 min ago</span>
                <div class="text-lg mt-1 text-blue-500">Aung Thu Hein</div>
                <div class="text-md mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit repellat inventore quaerat beatae illo eius possimus nisi quod, a quidem iusto rem quisquam incidunt numquam! Quaerat quisquam reprehenderit placeat ex?</div>
            </div>

            <div class="p-8 border-b border-gray-600">
                <span class="text-sm text-green-700">3 min ago</span>
                <div class="text-lg mt-1 text-blue-500">Aung Thu Hein</div>
                <div class="text-md mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit repellat inventore quaerat beatae illo eius possimus nisi quod, a quidem iusto rem quisquam incidunt numquam! Quaerat quisquam reprehenderit placeat ex?</div>
            </div>

            <div class="p-8 border-b border-gray-600">
                <span class="text-sm text-green-700">3 min ago</span>
                <div class="text-lg mt-1 text-blue-500">Aung Thu Hein</div>
                <div class="text-md mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit repellat inventore quaerat beatae illo eius possimus nisi quod, a quidem iusto rem quisquam incidunt numquam! Quaerat quisquam reprehenderit placeat ex?</div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onUpdated,  ref } from '@vue/runtime-core'
export default {
    setup(){
        let scroll =ref(null);

        onMounted(()=>{
            scroll.value.scrollTop = scroll.value.scrollHeight
        })

        onUpdated(()=>{
          scroll.value.scrollTop = scroll.value.scrollHeight
        })


        return {scroll}
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