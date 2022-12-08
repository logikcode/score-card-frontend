import ApiBaseUrl from "./ApiBaseUrl";
import { headerConfig } from "./AxiosHeaderConfig";


export const fetchDevScore = async (week, devId)=>{
    console.log("fetchDevScore invoked");
    let devScore = {}
    const response = await ApiBaseUrl.get(`admin/getScore/${week}/${devId}`, headerConfig())

    .then((response)=>{
      
      devScore = response.data.data;
      console.log( devScore);
    })
    return devScore ? devScore : "No Dev Score";
  }