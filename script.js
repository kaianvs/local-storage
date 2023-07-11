
let favorites = JSON.parse(localStorage.getItem('favorites')) || []


async function getExternalImage(){
     const response =  await fetch("https://source.unsplash.com/random/600x600")

     document.querySelector('.image')
     .innerHTML = `<img src="${response.url}" >`


}

getExternalImage()

document.querySelector('button').onclick = function() {
     getExternalImage()
}

document.querySelector('.image').onclick = function(){
    const imageSource = document.querySelector('.image img').src
    console.log(imageSource)


    favorites.push(imageSource)
    localStorage.setItem('favorites', JSON.stringify(favorites))

}