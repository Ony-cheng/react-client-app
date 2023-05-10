import axios from 'axios';

// const BASE_API_URL = "http://192.168.1.114:8080/api/v1.0/"
const BASE_API_URL = "http://localhost:8080/api/v1.0/"

export default class CarService{

    static async getAllManufacturers(){
        const result = await axios.get(BASE_API_URL + "cars/manufacturers")
        return result;
    }



}