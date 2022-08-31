<template>
  <div v-if="hideCookie==false"  class="transition ease-in-out duration-1000 translate-y-32">
      <div  class="bg-gray-600  text-center p-4 text-gray-800 "  >
      <i class="fa-solid fa-cookie-bite text-xl">
      </i> Accept cookies by scrolling window  
      <button class="bg-gray-700 text-gray-500 shadow-lg p-2 rounded-md ml-1" @click="acceptCookie">accept</button>
      </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup(){
    let hideCookie =ref(false)
    let acceptCookie =()=>{
      hideCookie.value =!hideCookie.value
      localStorage.setItem("cookie","status")
    }

    onMounted(()=>{
     if(localStorage.getItem('cookie')){
      hideCookie.value =true
     }
    })

    return {acceptCookie,hideCookie}
  }
}
</script>

<style>

</style>