const singlePetDiv = document.getElementById("singlePet");

const apiURL = "http://localhost:8080/api/v1/pets"

async function getSinglePet(){
    const request = await fetch(`${apiURL}/Fido`);
    const toJson = await request.json();
    console.log(toJson.name);
    singlePetDiv.textContent = toJson.name;
}

 getSinglePet();