<template>
  <div class="home h-auto "  >
    <NavBar @changeModel="changeModel" ></NavBar>
    <MovieShow :opacityChange="opacityChange" @click="hideOpacity"></MovieShow>
    
      <div>
        <MovieCardShow :movies="movies"></MovieCardShow>
      </div>
     
      <div v-if="movies">
        <BodyShow></BodyShow>
      </div>

      
        
      
    </div>
    <ShowAnime></ShowAnime>
   
   
  
</template>

<script>
import MovieCardShow from '../components/MovieCardShow'
import ShowAnime from '../components/ShowAnime'
import BodyShow from '../components/BodyShow'
import getData from '../composable/getData'
import MovieShow from '../components/MovieShow'
import { ref, watch } from '@vue/runtime-core'
import NavBar from '../components/NavBar'
import getName from '../composable/getName'
import { useRouter } from 'vue-router'

export default {
  components: {
    MovieCardShow,
    ShowAnime,
    BodyShow,
    MovieShow, NavBar },

  


  setup(){
    let {userName} =getName()
    let router =useRouter()
    let opacityChange =ref(true)
   

    watch(userName,()=>{
      if(!userName.value){
        router.push({name:"welcomePage"})
      }
    })

    let changeModel =(blockHistory)=>{
      opacityChange.value=!opacityChange.value
      blockHistory =!blockHistory
    }


    let hideOpacity =()=>{
     opacityChange.value =!opacityChange.value
    }


    //fetch data from firebase
    let {error,movies,moviesData} =getData()
       moviesData()

    

    return {changeModel,opacityChange,hideOpacity,error,movies}
  }
}
</script>
<style>

.backdrop{
   
    top: 0;
       background: rgba(151, 151, 151, 0.5);
    opacity: 0;
    width: 100%;
    height: 100%;
     z-index: 1;
   
}
</style>
