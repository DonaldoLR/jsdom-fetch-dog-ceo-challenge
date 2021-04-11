// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"; 
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            displayDogImgs(data);
        });

    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(res => res.json())
        .then (data => {
            displayBreeds(data);
        })
    
    const dropDownInput = document.getElementById('breed-dropdown');

    dropDownInput.addEventListener('change', filterBreeds)
})

function displayDogImgs(data){
    const arrayOfDogImg = data.message;
    

    arrayOfDogImg.forEach((dogImg) => {
        const createImg = document.createElement('img');
        const dogImgContainer = document.getElementById('dog-image-container');
        createImg.src = dogImg;
        
        dogImgContainer.appendChild(createImg);

    })
}

function displayBreeds(data){
    const objOfBreeds = data.message;
    
    for (const breed in objOfBreeds){
        const createLi = document.createElement('li');
        const breedUl = document.getElementById('dog-breeds');

        createLi.innerText = breed;
        createLi.classList.add('breed-item');

        breedUl.appendChild(createLi);

        createLi.addEventListener('click', updateColor)
        
    }
}

function updateColor(e){
 e.target.style.color = 'red';
}

function filterBreeds(e){
    const filterLetter = e.target.value;
    const liList = Array.from(document.getElementsByClassName('breed-item'));
    let filterOutList;

    liList.forEach((breedLi) => {
        breedLi.style.display = 'list-item';
    })
    if (filterLetter === 'none'){
        liList.forEach((breedLi) => {
            breedLi.style.display = 'list-item';
        })
    } else {
        filterOutList = liList.filter(li => li.innerText[0] !== filterLetter.toString())
    }
    

    filterOutList.forEach((breedLi) => {
        breedLi.style.display = 'none';
    })
    
}