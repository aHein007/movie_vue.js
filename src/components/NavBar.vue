<template>
  <div class="bg-gray-700 flex justify-between items-center top-0 sticky z-10 ">
     <div class="text-blue-400 p-5 text-md sm:text-lg  md:text-3xl  lg:text-3xl ">
     <router-link :to="{name:'home'}"> Channel Diamond</router-link>
     </div>

     
    <!-- serarch bar -->
     <div class="lg:mt-1 md:mt-1 sm:mt-1 relative">
      
      <input type="text" class="searchInput lg:w-96 md:w-44 md:py-5 sm:w-44 " placeholder="Search movie name" @click="blackModel" @keypress.enter="searchHistory" v-model="history">
      <div v-if="blockHistory==true" class="inputBox ">
        <div v-for="oneHistory in allHistory" :key="oneHistory" class="p-3 border-b-2 border-gray-700 cursor-pointer"><span @click="goDetail">
          {{ oneHistory }}
        </span><i class=" float-right cursor-pointer fa-solid fa-xmark p-1 text-rose-600" @click="deleteHistory(oneHistory)"></i></div>
      </div>
     </div>

    <!-- user Information -->
      <div class="userInfo" v-if="userName">
      <div class=" block text-gray-400">Hi  <span class="text-blue-400 font-bold">{{ userName.displayName }}</span></div>
       <div class=" block text-gray-400">logged in as {{ userName.email }}</div>
     </div>
     
     <div class="m-2">
     <div class="text-white text-md cursor-pointer  border border-gray-500 p-1 rounded-md hover:border-blue-400 hover:text-blue-400">
      <router-link :to="{name:'createMovie'}"> Create Movies</router-link>
     </div>
     </div>

      <div class=" text-white px-5 py-4 md:py-4 sm:py-4">
          
          <button class="signOutBtn" @click="userSignOut">Sign Out</button>
       
      </div>
     
    </div>
</template>

<script>
import  signOut  from "../composable/signOut"
import getName from "../composable/getName"
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import getData from "../composable/getData"
import { useRouter } from "vue-router"
export default {
  emits: ["changeModel"],
 setup(props,context){
 
  let blockHistory =ref(false)
  let allHistory =ref([]);
  let router =useRouter()
  let history =ref("");
  let  {userName} =getName()
  let {error,signOutAccount} =signOut()
  let {movies,moviesData} =getData()
  
  let historyText =ref("your last history is.....")
   
 
  let userSignOut =async()=>{
   await signOutAccount()
  }

  let blackModel =()=>{
    blockHistory.value=!blockHistory.value
   context.emit("changeModel",blockHistory.value)
  }


  let searchHistory =async()=>{
   let put = allHistory.value.push(history.value)
   let storage =localStorage.setItem('historyData',`${historyText.value  +" "+ history.value }`)
   
   //search movie
   movies.value.filter((movie)=>{
      moviesData()
      let result = movie.title.toLowerCase() == history.value;
      if(result ==true){
        router.push({name:'detailPage',params:{id:movie.id}})
      }else{
        console.log("Your result is not found!")
      }
      return result
    })
    


   history.value =""
  
  }

  let goDetail =()=>{
    movies.value.filter((movie)=>{
      moviesData()
      let result = movie.title.toLowerCase() == history.value;
      if(result ==true){
        router.push({name:'detailPage',params:{id:movie.id}})
      }else{
        console.log("Your result is not found!")
      }
      return result
    })
  }

  onMounted(()=>{
    let storageGet =localStorage.getItem("historyData")
    if(storageGet){
      allHistory.value.push(storageGet)
    }
  })

  let deleteHistory =(history)=>{
   allHistory.value = allHistory.value.filter((one)=>{
      return history != one
    })
  }

  

  return {userName,userSignOut,error,blackModel,blockHistory,searchHistory,allHistory,history,deleteHistory,movies,goDetail}
 }
}
</script>

<style>
nav a{
    font-weight: bold;
  
}

nav a.router-link-active{
    color:rgb(107, 154, 255)
}
</style>