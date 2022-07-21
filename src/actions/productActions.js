import userService from "../services/user.service";
import { 
    GET_PRODUCT_BY_SEARCH,
    GET_PRODUCT_NULL
 } from "./types";

export const getAllProduct = () => {
    return userService.getAllProduct();
};

export const getProductBySearch = (search) => (dispatch) => {
    return userService.getProductBySearch(search).then((response) => {
        const product = response.data.data.produk;
        if (product.length === 0){
            dispatch({
                type: GET_PRODUCT_NULL,
            });
        } else{
            dispatch({
                type: GET_PRODUCT_BY_SEARCH,
                payload: {
                    data: response.data.data.produk,
                }
            })
        }
    })
} 