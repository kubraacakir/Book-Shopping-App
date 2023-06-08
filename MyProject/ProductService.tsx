import axios from "axios";

export default class ProductService {
    getAllBook() {
        return axios.get("http://localhost:1112/book/getAll")
    }
}