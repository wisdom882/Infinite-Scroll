const imagecontainer = document.getElementById("image-container")
const count = 10;
const apiKey = "bp4Dz-0hwgq2NSGhs9M0w9sER0aLX2ni1AxmzDzcSRo";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
let photoArray = [];
let imagesLoaded = 0;
let totalImages = 0;
let ready = false;

//get photos from Unslpash API
console.log(apiUrl);
const getPhotos = async () => {

    try {

        const response = await fetch(apiUrl);
        photoArray = await response.json();
        console.log(photoArray);
        return photoArray;
        
    } catch (error) {
        
    }
}

//create elements for links and photo
function displayPhotos()
{
    photoArray.forEach((photo) => {
        //create an anchor
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html)
        item.setAttribute('target' , '_blank');
    })
}
getPhotos();