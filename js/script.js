const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, // Scale of 1 (refreshed) to 10 (exhausted)
        sleep: function () {
            console.log(`${this.name} needs a nap. Zzz...`);
            this.isTired = 1;
        },
        play: function () {
            if (this.isTired === 10) {
                console.log(`Too tired to play`);
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            }
        }
    };
    
    return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

// console.log(sora, clover, baxter, cleo, francine); - confirming that function works properly //

// clover.sleep(); // Confirming the functions work
// baxter.play(); 

// console.log(clover, baxter); // Checking to verify changes to the isTired property of both objects //



// PART 2 (STEP 5)
clover.isTired = 8;
francine.isTired = 9;
// console.log(clover, francine);

// Create an array of pet objects
const allPets = [
    sora,
    clover,
    baxter,
    cleo,
    francine
];
// console.log(allPets); - Verifying that the array worked

// Display pets in the browser
const showPets = function (petArray) {
    pets.innerHTML = ""; // Clears list each time showPets is run to prevent duplicate clicks //

    for (let pet of petArray) {
        let status = "Ready to play!"; // Use let because you'll reassign the value //
        if (pet.isTired >= 7) {
            status = "Sleeping"; // Do not use let or const here!!!
        };
        const li = document.createElement("li");
        li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`; // Use pet instead of this because we are not inside the object literal //
        pets.append(li);
    }
};

statusButton.addEventListener("click", function () {
    showPets(allPets);
});

// statusButton.addEventListener("click", () => showPets(allPets));
// These lines of code are equivalent. For more information on arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions //