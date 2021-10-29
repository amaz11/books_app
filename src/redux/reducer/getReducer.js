import { actionTypes } from "../contains/actionTypes";


const initialSatate = {
    bookArr:[],
    loading:false,
    errorMsg:"",
    isResponses:false
}

export const getReducer = (state=initialSatate,action)=>{
    switch (action.type) {
        case actionTypes.GET_CONTACT_LOADING:
            return{
                ...state,
                loading:true,
                errorMsg:""
            }
        case actionTypes.GET_CONTACT:
            return {
                ...state,
                bookArr: action.payload,
                loading:false,
                errorMsg:""
            }

            case actionTypes.GET_CONTACT_FAIL:
            return {
                ...state,
                loading:false,
                errorMsg:"Something Went WRONG"
            }
    
        default:
            return state
    }
}