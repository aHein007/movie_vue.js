<template>
 
  <div class="photosContainer "  >
    <div class="photosInner relative  ">
      <div class="photos" :class="{opacity:opacityChange===false}">
        <img src="" class="photo w-full h-[90vh] transition duration-200 ease-out shadow-2xl"  >
      </div>

       <div class="w-full h-full absolute top-0 my-60">
        <button @click="forWard" class="text-white absolute right-0 "><i class="fa-solid fa-angle-right text-blue-400 text-3xl px-5"></i></button>
        <button @click="backWard" class="text-white absolute left-0 "><i class="fa-solid fa-angle-left text-blue-400 text-3xl px-5"></i></button>
       </div> 
    </div>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
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

  let photoInterval = setInterval(()=>{
      mainPhoto()
     },8000)

   let forWard =()=>{
      mainPhoto()
      
     }
  let backWard =()=>{
      mainPhoto()
    }

let mainPhoto =()=>{
     photoClass =document.getElementsByClassName('photo')[0]
     
      let photoCounter =photos.value[currentPhoto.value]
      photoClass.src =photoCounter
       currentPhoto.value += 1
    
      if(currentPhoto.value == 5){
        photoClass.src ='https://wallpapercave.com/wp/wp10513232.png'
        currentPhoto.value =0
      }
     
   }
      
  
  

     
  
    return {forWard,backWard,photos,currentPhoto}
  }
}
</script>

<style>

</style>