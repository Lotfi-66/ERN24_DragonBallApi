class Character {
    id;
    name;
    ki;
    maxKi;
    race;
    gender;
    description;
    image;
    affiliation;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.ki = data.ki;
        this.maxKi = data.maxKi;
        this.race = data.race;
        this.gender = data.gender;
        this.description = data.description;
        this.image = data.image;
        this.affiliation = data.affiliation;
    }

    displayCharacter() {
        const character = document.createElement("div");
        character.classList.add("character-container");

        character.innerHTML = `
        <a href="#" class="btn btn-primary details">
            <div class="custom-card" style="width: 18rem;">
                <img src="${this.image}" class="card-img-top custom-image" alt="${this.name}">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.race} - ${this.gender}</p>
                    <p class="card-text">Ki: ${this.ki}</p>
                    <p class="card-text">Max Ki: ${this.maxKi}</p>
                    <p class="card-text">Affiliation: ${this.affiliation}</p>
                    <p class="card-text on">${this.description}</p>

                </div>
                </div>
        </a>
        `;



        return character;
    }


    
}

export default Character;

// Ajouter un gestionnaire d'événement pour l'élément <a>
const elADiv = document.querySelector("details");
elADiv.addEventListener('click', (event) => {
    event.preventDefault();
    const description = document.querySelector(".on");
    description.style.display="block";
    
    
});