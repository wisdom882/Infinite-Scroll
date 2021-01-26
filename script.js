const imagecontainer = document.getElementById("image-container")
const count = 10;
const apiKey = "bp4Dz-0hwgq2NSGhs9M0w9sER0aLX2ni1AxmzDzcSRo";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
let photoArray = [];
//get photos from Unslpash API
console.log(apiUrl);
async function getPhotos(){

    try {

        const response = await fetch(apiUrl);
        photoArray = await response.json();
        console.log(photoArray);
        
    } catch (error) {
        
    }
}

//create elements for links and photo
function displayPhotos()
{
    photoArray.forEach((photo) => {
        //create an anchor
        const item = document.createElement('a');
    })
}
getPhotos();