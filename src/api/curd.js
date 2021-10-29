import axios from "axios";

export const apiDetalis = (url,method,header,dataParams)=>{
    return  dataParams?axios({
        url,
        method,
        header,
        data:dataParams,
        timeout:2000
    }):axios({
        url,
        method,
        header,
        data:{},
        timeout:2000
    }
)
}

const getApiDetails = ()=>{
    const header= {
        'Content-Type': 'application/json',
    }    
    return apiDetalis("http://localhost:3000/books","GET",header,{})
}

const postApiDetails = (data)=>{
    const header={
        "Content-Type": "applicaton/json" 
    }
    return apiDetalis("http://localhost:3000/books","POST",header,data)
}

export {getApiDetails, postApiDetails }