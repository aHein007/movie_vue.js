<template>


  <div v-if="changeForm==false">
    <LoginForm @goHome="goHome"></LoginForm>
      <div class="text-gray-300 text-center">
        <p>You don't have account?<small class="changeBtn" @click="changeForm=!changeForm">SingUp</small></p>
      </div>
  </div>
  
  <div v-else>
    <SingUpForm @goHome="goHome"></SingUpForm>
      <div class="text-gray-300 text-center">
            <p>You have already account? <small class="changeBtn" @click="changeForm=!changeForm">Login</small></p>
      </div>
  </div>
 
</template>

<script>
import { ref } from '@vue/reactivity'
import LoginForm from '../components/LoginForm'
import SingUpForm from '../components/SingUpForm'
import { useRouter } from 'vue-router'
export default {
  components: {
    LoginForm, SingUpForm },


    setup(){
      //data
      let changeForm =ref(false)
      let router =useRouter()

      //function
      let goHome=()=>{
        router.push({name:'home'})
      }

      return {changeForm,goHome}
    }

}
</script>

<style>

</style>