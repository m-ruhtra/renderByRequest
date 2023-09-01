import { getAllCharacters, getByHouse } from "./request.js";

const createCard = ({ image, name, house }) => {
    const container = document.createElement("li");
    const img = document.createElement("img");
    const nameCharacter = document.createElement("h2");
    const houseCharacter = document.createElement("p");

    img.src = image;
    img.tag = name;

    nameCharacter.innerText = name;
    houseCharacter.innerText = house;

    nameCharacter.classList.add("nameCharacter");
    houseCharacter.classList.add("houseCharacter");

    container.append(img, nameCharacter, houseCharacter)

    return container
};

const render = (array) => {
    const mainList = document.querySelector(".main__list");

    mainList.innerText= "";

    array.forEach((character) => {
        const card = createCard(character);

        mainList.appendChild(card);
    });
};

export const renderAllCharacters = () => {
    const button = document.querySelector("#all");

    button.addEventListener("click", async () => {
        const characters = await getAllCharacters();
        console.log(characters);
        render(characters);
    })
}

// export const renderAllCharacters = () =>{
//     const buttonAll = document.querySelector("#all");

//     buttonAll.addEventListener("click", async () => {
//         const characters = await getAllCharacters();

//         render(characters);
//     });
// };

export const renderByHouse = () => {
    const button = document.querySelectorAll(".house__btn");

    button.forEach((button) =>{
        button.addEventListener("click", async (event) => {
            const houseName = event.target.id;

            const characterByHouse = await getByHouse(houseName);
    
            render(characterByHouse);
        });
    });
};