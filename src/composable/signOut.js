import { auth } from '@/firebase/config'
import { ref } from 'vue';
let error =ref('');

let signOutAccount =async()=>{
    try{
        await auth.signOut();
        console.log("you are log out")
       }catch(err){
        error.value =err.message
        console.log(err.message)
       }
}

let userLogout =()=>{
    return {error,signOutAccount}
}

export default userLogout