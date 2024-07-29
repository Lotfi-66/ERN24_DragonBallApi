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
        const elADiv = document.createElement("a");
        elADiv.href = '#';
        elADiv.addEventListener('click', () => {console.log(`rediriger vers le detail du personnage`)});
        elADiv.innerHTML = `
        <a href="#" class="btn btn-primary">
        <div class="custom-card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top custom-image" alt="${this.name}">
        <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">${this.race}-${this.gender}</p>
        <p class="card-text">${this.ki}</p>
        <p class="card-text">${this.maxKi}</p>
        <p class="card-text">${this.affiliation}-${this.gender}</p>
        </div>
        </div>
        </a>
        `;

        elADiv.character.appendChild();

        return character;
    }
}

export default Character;