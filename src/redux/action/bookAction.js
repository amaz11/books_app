import { actionTypes } from "../contains/actionTypes";
import { getApiDetails,postApiDetails } from "../../api/curd";

export const getBooks =  ()=>{
    return async (dispatch) => {
        try{

            dispatch({
                type: actionTypes.GET_CONTACT_LOADING
            })
            const res = await getApiDetails();
        // console.log("Response:", res)
        dispatch({
            type: actionTypes.GET_CONTACT,
            payload: res.data
        });
        }catch{
            dispatch({
                type: actionTypes.GET_CONTACT_FAIL
            })
        }
        
    }
}

export const postBook =  (data)=>{
    return (dispatch)=>{
        try {
            postApiDetails(data)
            dispatch({
                type: actionTypes.POST_BOOK,
                payload:""
            })
        }catch(error){}
    }
}

