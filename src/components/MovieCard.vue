<template>
  
    <p class="text-white  px-12 py-5 font-bold text-xl ">All movies</p>
    <!-- <div class="relative z-10 p-1">
      <span class="flex items-center justify-between py-1 my-52  h-full w-full absolute">
        <i @click="backBtn" class=" fa-solid fa-angle-left text-gray-400   text-3xl px-3  border border-white bg-white rounded-3xl  cursor-pointer "></i>
        <i @click="nextBtn" class="fa-solid fa-angle-right text-gray-400   text-3xl px-3 m-2  border border-white bg-white rounded-3xl  cursor-pointer "></i>
      </span>
   </div> -->
   
  <div class="">
    <div   v-for="(movie,index) in movies" :key="movie" :index="index" class="  ml-4 inline-block mb-5 card-container   w-80 h-5/6   border border-gray-700 rounded-2xl shadow-2xl text-white transform duration-300 hover:scale-105">
    <div  v-if="movies">
      <SingleMovie :movie="movie" ></SingleMovie>
    </div>
  </div> 
  </div>
 
  
 
 
  
  
</template>

<script>
import SingleMovie from './SingleMovie'


export default {
  components: { SingleMovie },
    props:[
        'movies'
    ],

    setup(){
      let nextBtn =()=>{
        console.log("hi")
      }


      let backBtn =()=>{
        console.log("hello")
      }
        


        return {nextBtn,backBtn}
    }
}
</script>

<style>

</style>