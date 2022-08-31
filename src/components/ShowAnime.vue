<template>
     <p class="text-2xl p-5 ml-5 text-white">Animation</p>
  <div class=" ml-4 inline-block mb-5 card-container   w-80 h-5/6   border border-gray-700 rounded-2xl shadow-2xl text-white transform duration-300 hover:scale-105">
    <div>
        <div class="text-white">
           
            <div class="card ">
            
            <div class="relative">
                <img src="../assets/photo1.jpg" alt="" class=" h-32 w-full rounded-t-2xl hover:object-cover ">
                <div class="absolute bottom-0  m-auto p-2 px-3 text-3xl text-blue-500">
                    <i class="fa-solid fa-circle-play"></i>
                </div> 
                
                 <div class="absolute top-0 right-0  m-auto p-2 px-3 text-3xl text-blue-500">
                    <!-- <i class="fa-solid fa-heart text-rose-500"></i> -->
                </div>  
            </div>

           <div class="p-4">
          
         
                 <p class="text-xl mb-2">The Bat Man</p> <!--  this is title -->
                <div class="text-sm mb-2">
                    <p class="inline mr-2">2021</p>  | <!--  this is year -->
                    <p class="inline mx-2">7.0<i class="fa-solid fa-star text-yellow-400 ml-1"></i></p>  <!--  this is rating -->
                </div>
                <p class="text-sm mb-2 inline border-2 border-white bg-white opacity-20 mx-1 shadow-2xl rounded-md text-black p-1" ></p>  <!--  this is category -->
                <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis atque distinctio magni tempora dignissimos repudiandae, molestias nostrum voluptate officia? Aperiam eum  <i class="text-blue-500 cursor-pointer"></i></p> <!--  this is descirption -->
           </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>