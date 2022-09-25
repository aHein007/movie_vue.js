import { db } from "@/firebase/config";
import { ref } from "vue"

let error =ref("");
let allmessage =ref([]);

let suggestMessage =async()=>{
    try{
        let res = db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            snap.docs.map((doc)=>{
                let document ={id:doc.id,...doc.data()}
               
                document.created_at && allmessage.value.push(document)
             
                
            })
        });
        
       
        if(!res){
            throw new Error("show message is error")
        }
        
    }catch(err){
        console.log(err)
        error.value =err.message
    }
}



let showMessage =()=>{
    return {error,suggestMessage,allmessage}
}

export default showMessage