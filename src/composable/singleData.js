import { ref } from "vue"
import {db} from "../firebase/config"

let error=ref("");
let singleMovie =ref({});

let oneMovie =async(id)=>{
    try{
        let res =await db.collection("movie").doc(id).get()
        singleMovie.value ={id:res.id,...res.data()}
        if(!res){
            throw new Error("You single data is fail");
        }
    }catch(err){
        error.value =error.message
    }
}

let singleData =()=>{
    return {error,oneMovie,singleMovie}
} 

export default singleData

// {error,oneMovie,singleMovie}