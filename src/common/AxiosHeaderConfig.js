import { getTokenFromLocalStorage } from "./TokenService";

export const headerConfig = ()=>{
const token = getTokenFromLocalStorage();
return  {
    headers: { 
      Authorization: `Bearer ${token}`
    }
};
}