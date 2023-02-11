import axios from 'axios';

const BOOK_API_REST_URL = "http://localhost:8080/";

class APIService {
    
    getBooks(){
        return axios.get(BOOK_API_REST_URL);
    }

getBooks2()
{
    return axios.get(BOOK_API_REST_URL+'products1');
}
    
handleSubmit()
{
    return  axios.get('http://localhost:8080/users3');

}

}

export default new APIService();