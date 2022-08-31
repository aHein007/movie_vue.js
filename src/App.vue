<template>

  
  <router-view/>
  <footer class=" relative"> 
    <!-- footer -->
    <div class="bg-gray-800 w-full ">
     
    </div>

    <!-- cookie -->
     <CookieBar ></CookieBar>
  </footer>
</template>

<script>


import CookieBar from './components/CookieBar'
export default {
  components: { CookieBar },
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}
body{
  background:#35495E;
  width: 100%;
  height: 100%;
 
  
}



</style>
