import axios from "axios";
import authHeader from "./auth-header";

// const header = { header: authHeader(), 'Content-type': 'application/json'};

const API_URL = "https://staging-fasthand-api.herokuapp.com/api/";

const getAllProduct = () => {
  return axios.get(API_URL + 'produk/all/paging?pageNo=0&pageSize=10' )
}


const getProductBySearch = (search) => {
  return axios.get(
    API_URL + `produk/all/paging?searchNamaProduk=${search}&pageNo=0&pageSize=10`
  );
};

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

// eslint-disable-next-line
export default {
  getAllProduct,
  getProductBySearch,
  // getPublicContent,
  getUserBoard,
};