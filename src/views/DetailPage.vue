<template>
    <div class="w-full h-full ">
        <div class="text-white relative shadow-2xl" v-if="singleMovie">
        <img :src="singleMovie.images" alt="" class=" opacity-50  w-full h-[90vh]">
        
        <router-link :to="{name:'home'}"><div class=" text-2xl text-black  absolute top-0 m-5 py-2 px-4"><i class="fa-solid fa-arrow-left"></i></div></router-link>

        <div class="p-10 absolute bottom-0  py-16">
            
            <h1 class="text-3xl mb-2 ">{{ singleMovie.title }}</h1>
           
           
          

             <div class="text-sm mb-2">
                    <p class="inline mr-2">{{ singleMovie.year }}</p>  | <!--  this is year -->
                    <p class="inline mx-2">{{ singleMovie.rating }}<i class="fa-solid fa-star text-yellow-400 ml-1"></i></p>  <!--  this is rating -->
                    <p class="category " v-for="category in singleMovie.categorys" :key="category">{{ category }}</p> 
                </div>
            
            <p class="mt-10">{{ singleMovie.description }}</p>
           
        </div>
    </div>

    <div class="p-10 flex text-center ">
        <div class=" bg-blue-500  w-28 p-1 rounded-md cursor-pointer  text-white mr-5 shadow-xl">
            Play
        </div> 

        <div class=" bg-gray-500 w-28 p-1 rounded-md cursor-pointer  text-white mr-5 shadow-xl">
            Share
        </div>

        <div class="w-28 p-1 rounded-md cursor-pointer  text-white shadow-xl mr-5 border border-gray-600" :class="{green:changeBtn==true}">
            <p  @click="favButton">Favourite</p>
           
        </div>

        <div class=" w-28 p-1 rounded-md cursor-pointer  text-white  shadow-xl  border border-gray-600 "  :class="{red:changeBtn==false}">
           <p @click="UnfavButton">Unfavourite</p>
        </div> 


        

        
        
    </div>
       
       
        <div class="flex justify-center mt-10">
            <div class="mainWidth w-6/12 h-80   px-5 mx-5 bg-slate-700  flex overflow-hidden relative">
            
            
            <div class="absolute top-0 bottom-0 flex items-center z-10">
                <i @click="backBtn" class=" fa-solid fa-angle-left arrows"></i>
            </div>
            

           
            <div class="absolute right-0 top-0 mr-6 p-1 bottom-0 flex items-center z-10">
                <i @click="nextBtn" class=" fa-solid fa-angle-right arrows flex "></i>
            </div>

           
           <div class=" flex justify-center w-full  overflow-hidden " id="slide">
                <div class="">
                    <img :src="singleMovie.images" class="image w-full h-full transition-all duration-700 ease-in-out "  @click="showImage">
                </div>
                
           </div>

            
            
        </div>
        </div>

       <div class=" grid grid-cols-4 gap-1">
        <div class="col-span-2">
            <DownLoad></DownLoad>
        </div>
        
       <div class="col-span-2">
        <PostUser></PostUser>
       </div>
       </div>
       
    </div>

        
       

        
        
   
</template>

<script>
import PostUser from '../components/PostUser'
import DownLoad from '../components/DownLoad'
import { ref } from '@vue/reactivity';
import singleData from '../composable/singleData';
import { db } from '@/firebase/config';
import { onMounted} from '@vue/runtime-core';

export default {
  components: {
    PostUser, DownLoad },

  
    props:[
        "id"
    ],

    

    setup(props){
        let changeBtn =ref(false)
        let like =ref(true)
        let getSlideCount =ref(0)
        let nowShowSlide =ref(5)
       
        

        let imageContainer =ref([
            "https://static01.nyt.com/images/2017/04/07/arts/07yourname1/07yourname1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
           "https://wallpaper.dog/large/20496215.jpg",
           "https://c4.wallpaperflare.com/wallpaper/396/483/647/your-name-wallpaper-preview.jpg",
           "https://moviesubtitlesrt.com/wp-content/uploads/2021/01/47-1024x640.jpeg",
           "https://wallpaper.dog/large/20496227.jpg",
        ])

       let {error,oneMovie,singleMovie} =singleData()
       oneMovie(props.id)

        //fav button
       let favButton =async()=>{
        changeBtn.value =!changeBtn.value
       let change ={
        like:like.value
       }
      await db.collection("movie").doc(props.id).update(change)
    
      
       }

         //Unfav button
    let UnfavButton =async()=>{
        changeBtn.value =!changeBtn.value
        let change ={
        like:!like.value
       }
      await db.collection("movie").doc(props.id).update(change)
    }


    // next Btn
    let nextBtn=()=>{
        let getSlide =document.getElementById("slide");
        let image =document.getElementsByClassName("image")[0];
        let nextSlide =imageContainer.value[getSlideCount.value]
        image.src =nextSlide
        getSlideCount.value+=1
        if(getSlideCount.value == 5){
            getSlideCount.value=0
            image.src=singleMovie.value.images
        }

       
    }

    


    // back Btn
    let backBtn=()=>{
        let getSlide =document.getElementById("slide");
        let image =document.getElementsByClassName("image")[0];
        let nextSlide =imageContainer.value[getSlideCount.value]
        image.src =nextSlide
        getSlideCount.value+=1;
        if(getSlideCount.value == 5){
            getSlideCount.value=0
            image.src=singleMovie.value.images
        }
    }

    onMounted(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
    })


    


       return {error,oneMovie,singleMovie,like,favButton,UnfavButton,changeBtn,imageContainer,nextBtn,backBtn}
    }
 

}
</script>

<style>
.green{
background-color: rgb(51, 197, 51);
}

.red{
background-color: crimson;

}

.mainWidth{
    width: 50%;
    overflow: hidden;
}




</style>