<template>


<div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 ">
  <div class="max-w-lg mx-auto m-5 ml-20">
    <div class="lg:text-md text-gray-300 font-bold ">Please Enter Your Suggestion</div>

    <p class="mt-4 text-gray-400">
     if you suggestion comment below the form! We will thank you!
    </p>
  </div>

  <form  class="max-w-md mx-auto mt-8 mb-0 space-y-4" @submit.prevent="post">
    <div>
      <label for="name" class="sr-only">name</label>

      <div class="relative">
        <input
          type="name" v-model="name"
          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm  bg-gray-700 text-white"
          placeholder="Enter name"
        />

        
      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Post</label>
      <div class="relative">
        <textarea  cols="30" rows="4" type="text" class="w-full p-5  text-sm border-gray-200 rounded-lg shadow-sm bg-gray-700 text-white" placeholder="Enter Your Suggestion...." v-model="message"></textarea>

       
      </div>
    </div>

    <div class="flex items-center justify-center">
      

      <button 
        class="inline-block px-5  py-3 ml-3 text-sm font-medium text-gray-400 bg-gray-700 rounded-lg hover:text-gray-500 hover:bg-white"
      >
        Post
      </button>
    </div>
  </form>
</div>

</template>

<script>
import { ref } from '@vue/reactivity'
import { timestamp } from '@/firebase/config';
import userPost from "../composable/userPost"
export default {
  setup(props,context){
    let name =ref("");
    let message =ref("");
    let {error,userPostMessage} =userPost()

   

    let post =async()=>{
      let update ={
        name:name.value,
        messages:message.value,
        created_at:timestamp()
      }
     await userPostMessage("messages",update)
     
     name.value ="",
     message.value =""
    }

    return {
      name,message,post
    }
  }
}
</script>

<style>

</style>