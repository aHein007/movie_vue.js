<template>
    <section>
      <p class="text-white  px-12 py-5 font-bold text-xl ">All movies</p>
      <div class="flex ">
        <div class="w-10  flex items-center ">
          <div class="z-10">
            <i @click="back" class="ml-2 fa-solid fa-angle-left text-gray-400  z-10  text-3xl px-3  border border-white bg-white rounded-3xl  cursor-pointer"></i>
          </div>
        </div>
       
      <div class="w-11/12 p-2 overflow-hidden" id="sliderContainer">
        <ul id="slider" class="flex w-full transition-margin duration-700">
          <li  v-for="(movie,index) in movies" :key="movie" :index="index" class=" ml-4  mb-5 card-container   border border-gray-700 rounded-2xl shadow-2xl text-white transform duration-300 hover:scale-105">
            <div v-if="movie">
              <SingleMovie :movie="movie"  class=""></SingleMovie>
            </div>
          </li>
        </ul>
      </div>
        <div class="w-10 ml-5 flex items-center ">
          <div class=" z-10">
            <i @click="next" class="fa-solid fa-angle-right text-gray-400 disabled  text-3xl px-3  border border-white bg-white rounded-3xl cursor-pointer"></i>
          </div>
        </div>
      </div>
    </section>
   
   
    
    
  </template>
  
  <script>
import { ref } from '@vue/reactivity'
  import SingleMovie from './SingleMovie'
import { onMounted } from '@vue/runtime-core'
  
  
  export default {
   
    components: { SingleMovie },
      props:[
          'movies'
      ],
  
      setup(){
        let cardCounter =ref(4)

        onMounted(()=>{
          let sliderContainer =document.getElementById("sliderContainer");//container div Tag
          let slider =document.getElementById("slider"); // ulTag
          let cards =document.getElementsByTagName("li"); // li Tag

         let sliderWidth =sliderContainer.clientWidth; //1034 px
          let oneCardWidth =sliderWidth/cardCounter.value; // 1034/4 //one card get width (412.33 px)
         
          slider.style.width =cards.length*oneCardWidth+"px" // card.Length =4 , 5 * 412.33 =206.165 px(get slider width) //ul Tag width

          for (let i = 0; i < cards.length; i++) { // li Tag width
            let element = cards[i];
            element.style.width =oneCardWidth+"px"
           
          }
        })
  
        let next =()=>{
          let sliderContainer =document.getElementById("sliderContainer");
          let slider =document.getElementById("slider");
          let sliderWidth =sliderContainer.clientWidth; //
          let oneCardWidth =sliderWidth/cardCounter.value; //
          let cards =document.getElementsByTagName("li");

          

          
            slider.style.marginLeft =((+slider.style.marginLeft.slice(0,-2))-oneCardWidth)+'px'
         
        
         if( slider.style.marginLeft < -170+'px' ){
          slider.style.marginLeft=0+"px"
         }else{
          console.log("false")
         }

        
         
        }
  
        let back=()=>{
          let slider =document.getElementById("slider");
          let sliderWidth =sliderContainer.clientWidth; //
          let oneCardWidth =sliderWidth/cardCounter.value; //
          if(slider.style.marginLeft < +750+"px"){
            slider.style.marginLeft=0+"px"
          }else{
            console.log("false")
          }

          slider.style.marginLeft =((+slider.style.marginLeft.slice(0,-2))+oneCardWidth)+'px'
        }
  
  
  
  
  
        return {next,back,cardCounter}
      }
  }
  </script>
  
  <style>

  </style>