import { ref } from "vue"
import {db} from "../firebase/config"

let error =ref("");

let userPostMessage =async(collection,update)=>{
    try{
     let res =await db.collection(collection).add(update)
     if(!res){
        throw new Error("customer message is not response")
       }
    }catch(err){
        console.log(err.message)
        error.value =err.message
    }
}



let userPost =()=>{
    return {error,userPostMessage}
}

export default userPost
