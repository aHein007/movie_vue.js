<template>
  <form @submit.prevent="loginMethod" class="text-center p-10 overflow-hidden">
     <h1 class="text-3xl text-gray-300 mt-10 ">Channel Diamond</h1>

    <div class=" bg-black mt-10 max-w-lg m-auto bg-opacity-30 rounded-md">
      <p class="text-3xl text-white p-5 md:mr-56 sm:m-auto">Login</p>
      
      <div class="p-5 text-gray-500 ">
      
      
      <div class="flex justify-center m-5">
        <input type="email" class="input" placeholder="Enter your email" v-model="email">
      </div>

      <div class="flex justify-center m-5">
        <input type="password" class="input" autocomplete="true" placeholder="Enter your password" v-model="password">
      </div>

      

      <div>
        <button class="btn">Login</button>
      </div>
      </div>
    </div>

  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import logIn from "../composable/logIn"

export default {
  setup(props,context){
    //data
    let email =ref("")
    let password =ref("")

    //composable
     let {error,loginAccount} =logIn()

    //function
    let loginMethod=async()=>{
    let res= await loginAccount(email.value,password.value)
      if(res){
        context.emit("goHome")
      }
    }

    return {loginMethod,email,password,error}
  }
}
</script>

<style>

</style>