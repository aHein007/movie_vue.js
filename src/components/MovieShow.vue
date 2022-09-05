<template>
 
  <div class="photosContainer "  >
    <div class="photosInner relative  ">
      <div class="photos transition-margin duration-700" :class="{opacity:opacityChange===false}">
        <img src="" class="photo w-full h-[85vh]  shadow-3xl"  >
      </div>

       
    </div>
  </div>
  <div class="w-full h-full absolute top-0 my-80  ">
        <button @click="forWard" class="text-white absolute right-0 "><i class="fa-solid fa-angle-right border opacity-60 border-white  rounded-full  bg-white text-black text-3xl px-3 mr-3"></i></button>
        <button @click="backWard" class="text-white absolute left-0 "><i class="fa-solid fa-angle-left border  opacity-60 border-white rounded-full  bg-white text-black text-3xl px-3 ml-3"></i></button>
  </div> 
  
</template>

<script>
import { ref } from '@vue/reactivity'
import { onBeforeMount, onMounted, onUnmounted } from '@vue/runtime-core'
export default {
   props:[
        'opacityChange'
    ],
  setup(props){
    let photos =ref([
      "https://images5.alphacoders.com/744/744908.jpg",
      "https://cdn.flickeringmyth.com/wp-content/uploads/2019/12/weathering-with-you-poster.jpg",
      'https://flxt.tmsimg.com/assets/p15767582_b_h10_ab.jpg',
      'https://i.ytimg.com/vi/Qyonn5Vbg7s/maxresdefault.jpg'
    ])

    let photoClass;

    let currentPhoto =ref(0)
     onMounted(()=>{
      
       photoClass =document.getElementsByClassName('photo')[0]
      photoClass.src ='https://wallpapercave.com/wp/wp10513232.png'
    })

   
    let inter =setInterval(()=>{
        mainPhoto()
      },5000)
  

    onUnmounted(()=>{
      clearInterval(inter)
    })

   let forWard =()=>{
      mainPhoto()
      
     }
  let backWard =()=>{
      mainPhoto()
    }

let mainPhoto =()=>{
    let transition =true
     photoClass =document.getElementsByClassName('photo')[0]
     let imageTag =document.getElementsByTagName("img")[0]
     
      let photoCounter =photos.value[currentPhoto.value]
      photoClass.src =photoCounter
       currentPhoto.value++
      
    
      if(currentPhoto.value == 4){
        photoClass.src ='https://wallpapercave.com/wp/wp10513232.png'
        currentPhoto.value =0
      }
     
   }
      
  
  

     
  
    return {forWard,backWard,photos,currentPhoto}
  }
}
</script>

<style>
.imageEffect{
 transform: scale(110px);
}
</style>