<template>
     <div class="card">
            
            <div class="relative">
                <img :src="movie.images" alt="" class=" h-32 w-full rounded-t-2xl hover:object-cover ">
                <div class="absolute bottom-0  m-auto p-2 px-3 text-3xl text-blue-500">
                    <i class="fa-solid fa-circle-play"></i>
                </div> 
                
                 <div v-if="movie.like == true" class="absolute top-0 right-0  m-auto p-2 px-3 text-3xl text-blue-500">
                    <i class="fa-solid fa-heart text-rose-500"></i>
                </div>  
            </div>
 
           <div class="p-4">
          
         
                 <p class="text-xl mb-2">{{ movie.title }}</p> <!--  this is title -->
                <div class="text-sm mb-2">
                    <p class="inline mr-2">{{ movie.year }}</p>  | <!--  this is year -->
                    <p class="inline mx-2">{{ movie.rating }}<i class="fa-solid fa-star text-yellow-400 ml-1"></i></p>  <!--  this is rating -->
                </div>
                <p class="text-sm mb-2 inline border-2 border-white bg-white opacity-20 mx-1 shadow-2xl rounded-md text-black p-1" v-for="category in movie.categorys" :key="category">{{ category }}</p>  <!--  this is category -->
                <p class="mt-4">{{ cutText }} <i class="text-blue-500 cursor-pointer"><router-link :to="{name:'detailPage',params:{id:movie.id}}">moreInfo...</router-link></i></p> <!--  this is descirption -->
           </div>
        </div>  
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
props:[
    'movie'
],

setup(props){
    let cutText =computed(()=>{
        return props.movie.description.substring(0,120) 
    })

    return{cutText}
}

}
</script>

<style>
.card{
    display: inline-block;
}


</style>