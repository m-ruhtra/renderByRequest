const baseUrl = "https://hp-api.onrender.com/api";

export const getAllCharacters = async () => {
    const characters = await fetch(`${baseUrl}/characters`, {
        method: "GET"
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Algo deu errado! Tente novamente mais tarde.");
            };
        })
        .catch((error) => {
            alert(error.message);
        })

    return characters
};

export const getByHouse = async (houseName) => {
    const characters = await fetch(`${baseUrl}/characters/house/${houseName}`, {
        method: "GET"
    })
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("Algo deu errado! Tente novamente mais tarde.");
            };
        })
        .catch((error) => {
            alert(error.message);
        })

    return characters
};