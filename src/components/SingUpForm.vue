<template>
  <form @submit.prevent="signInMethod" class="text-center p-10 overflow-hidden">
     <h1 class="text-3xl text-gray-300 mt-5 ">Channel Diamond</h1>

    <div class=" bg-black mt-10 max-w-lg m-auto bg-opacity-30 rounded-md">
      <p class="text-3xl text-white p-5 md:mr-56 sm:m-auto">Sign Up</p>
      
      <div class="p-5 text-gray-500 ">
      
      <div class="flex justify-center m-5">
        <input type="text" class="input" placeholder="Enter your name" v-model="name">
      </div>
      
      <div class="flex justify-center m-5">
        <input type="email" class="input" placeholder="Enter your email" v-model="email">
      </div>

      <div class="flex justify-center m-5">
        <input type="password" class="input" placeholder="Enter your password" v-model="password">
      </div>

      

      <div>
        <button class="btn">Sign Up</button>
      </div>
      </div>
    </div>

  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import signUp from "../composable/signUp"
export default {
  setup(props,context){
    //data
    let name =ref("")
    let email =ref("")
    let password =ref("")

  //composable 
  let {error,createAccount} =signUp()

    //function
    let signInMethod =async()=>{
  let res= await createAccount(name.value,email.value,password.value)
   if(res){
    console.log(name.value)
    context.emit("goHome")
   }
    }



    return {signInMethod,name,email,password,error}
  }
}
</script>

<style>

</style>