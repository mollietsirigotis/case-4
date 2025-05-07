const form = document.getElementById("search-form");
const searchButton = document.getElementById("search-button");
const houseSearch = document.getElementById("house-search");
const startPage = document.getElementById("start-page");
const characterFeed = document.getElementById("character-feed");

form.addEventListener("submit", buttonClick);

function buttonClick(e) {

    // Prevents reloading the page
    e.preventDefault();  

    // Gets the house name entered by the user
    const house = houseSearch.value.trim();  

    if (!house || !["gryffindor", "slytherin", "hufflepuff", "ravenclaw"].includes(house.toLowerCase())) {
        document.getElementById("error-message").textContent = "Please enter a valid Hogwarts house: Gryffindor, Slytherin, Hufflepuff, or Ravenclaw.";
        return;
    }

    startPage.style.display = 'none';

    // Add the class of the selected house to the body
    document.body.classList.add(house.toLowerCase());

    const houseTitle = document.getElementById("house-title");
    houseTitle.textContent = `${house.charAt(0).toUpperCase() + house.slice(1)} students`;

    // Fetch characters from Harry Potter API
    fetch("https://hp-api.onrender.com/api/characters")

        .then(response => response.json())
        .then((data) => {

            // Loop through data and filter based on the house
            const filteredCharacters = data.filter(character => character.house && character.house.toLowerCase() === house.toLowerCase());

            if (filteredCharacters.length === 0) {
                characterFeed.innerHTML = `<p>No characters found for house ${house}.</p>`;
            } else {
                // Display each character in the feed
                filteredCharacters.forEach((character) => {
                    const characterCard = document.createElement("div");

                    // Assign a generic class to all character cards
                    characterCard.classList.add("character-card");

                    characterCard.innerHTML = `
                    <img src="${character.image || 'https://cdn.pixabay.com/photo/2016/04/01/08/58/cat-1299082_1280.png'}" alt="Character portrait of ${character.name}">
                    <h3>${character.name}</h3>
                    <p>Gender: ${character.gender || 'Unknown'}</p>
                    <p>Year of birth: ${character.yearOfBirth || 'Unknown'}</p>
                    <p>House: ${character.house}</p>
                    <p>Ancestry: ${character.ancestry || 'Unknown'}</p>`;

                    characterFeed.appendChild(characterCard);
                });
            }
        })
        .catch((error) => {
            console.log("error", error);
            characterFeed.innerHTML = "<p>There was an error fetching the data.</p>";
        });
};