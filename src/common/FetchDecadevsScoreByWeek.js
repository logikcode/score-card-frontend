import ApiBaseUrl from "./ApiBaseUrl";
import { getTokenFromLocalStorage } from "./TokenService";

export const retrieveScoreForAllDevsInPod = async ()=>{

const config = getTokenFromLocalStorage();
const response = await ApiBaseUrl.get()
.then(()=>{
    
})

}