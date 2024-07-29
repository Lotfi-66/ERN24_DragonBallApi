import DbzService from "../Services/DbzService";
import Character from "./Character";


class App {

    dbzService;

    constructor() {
        this.dbzService = new DbzService();
    }

    start() {
        console.log("App started");
        this.getCharacters();
    }

    //méthode qui récupère les personnages
    getCharacters() {
        this.dbzService.getCharacters()
            .then(response => {
                if (response.ok) {
                    response.data.items.map(character => {
                        const characterObject = new Character(character);
                        const characterElement = characterObject.displayCharacter();
                        const app = document.getElementById("app");
                        app.className = 'd-flex flex-wrap align-items-center'
                        document.getElementById("app").appendChild(characterElement);
                    })
                } else {
                    console.log(response.error);
                }
            })
    }
}

const app = new App();

export default app;
