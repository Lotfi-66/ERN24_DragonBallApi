import ServiceResponse from "./ServiceResponse";
const API_URL = "https://dragonball-api.com/api";

class DbzService {

    constructor() {
        this.page = 1;
    }

    //méthode pour recuperer les personnages
    getCharacters() {
        return new Promise((resolve, reject) => {
            fetch(`${API_URL}/characters?page=${this.page}`)
                .then((response) => response.json())
                .then((data) => {
                    resolve(new ServiceResponse(true, null, data));
                })
                .catch((error) => {
                    reject(new ServiceResponse(false, error, null));
                })
        })
    }
}


export default DbzService