<template>
    <NavBar></NavBar>
     <form  class="text-center p-10 h-screen">
     <h1 class="text-3xl text-gray-300  ">Add Movie</h1>

    <div class=" bg-black mt-10 max-w-lg m-auto bg-opacity-30 rounded-md">
      <p class="text-3xl text-white p-5 md:mr-56 sm:m-auto">Enter a Movie</p>
      
      <div class="p-5 text-gray-500 ">
      
      
      <div class="flex justify-center m-5">
        <input type="name" class="input" placeholder="Enter movie name" >
      </div>

      <div class="flex justify-center m-5">
        <div class="grid grid-cols-2 gap-2 w-80 m-auto">
        <input type="text" class="inputHalf" placeholder="Enter year" >
        <input type="number" class="inputHalf" placeholder="Enter rating" >
      </div>
      </div>

      

      <div class="flex justify-center m-5">
        <input type="text" class="input" placeholder="Enter movie image link" >
      </div>


      <div class="flex justify-center m-5">
        <input type="text" class="input block" placeholder="Enter movie categorys" @keypress.enter.prevent="addCategory" v-model="category">
        
      </div>
      <div class="text-white w-auto mb-3 rounded-3xl bg-blue-500 text-center p-2  inline-block ml-5" v-for="oneCategory in categoryContainer" :key="oneCategory">
             {{ oneCategory }}
      </div>
     

      

      <div class="flex justify-center">
        <textarea class="textArea" cols="30" rows="50" placeholder="Enter movie description"></textarea>
      </div>

      

      <div>
        <button class="btn">Create</button>
      </div>
      </div>
    </div>

  </form>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { ref } from '@vue/reactivity';

export default {
    components: { NavBar },

    setup(){
      let categoryContainer =ref([]);
      let category =ref("")

     let addCategory =()=>{
      categoryContainer.value.push(category.value)
      category.value=""
     }


     return {addCategory,category,categoryContainer}
    }

  
}
</script>

<style>

</style>