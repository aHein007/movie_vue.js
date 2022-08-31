import { ref } from "vue"
import { db } from "../firebase/config"

let error=ref("");
let movies =ref([]);
let moviesData =async()=>{
  try{
    let res = await db.collection("movie").get()
    let data =res.docs.map((doc)=>{
        return {id:doc.id,...doc.data()}
    })
    movies.value =data
  }catch(err){
    console.log(err.message)
    error.value =err.message
  }
}

let getData =()=>{
    return {error,movies,moviesData}
}

export default getData

