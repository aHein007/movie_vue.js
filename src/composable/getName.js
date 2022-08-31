import { auth } from "@/firebase/config";
import { ref } from "vue";

//currentUser is ,knowing now user
let userName =ref(auth.currentUser);
    // onAuthStateChanged is check when you login or logout
    auth.onAuthStateChanged((_user)=>{
            userName.value =_user
        })


let showData =()=>{
    return {userName}
}
export default showData