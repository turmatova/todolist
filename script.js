let btn = document.querySelector('.btn'); 
let url = document.querySelector('.url'); 
let name = document.querySelector('.name'); 
let price = document.querySelector('.price'); 
let list = document.querySelector('.menu-list'); 
 
list.style.display = 'none'; 
 
btn.addEventListener('click', () => { 
    list.innerHTML = `<div class="menu-item"><img src="${url.value}" alt="img" style="width: 50px; height: 50px; object-fit: cover;" class="img"><h5 class="ash">${price.value}</h5><p class ="pii">${name.value}</p><ion-icon name="close-outline" class="icon"></ion-icon></div>`; 
    list.style.display = 'flex'; 
    url.value = ''; 
    name.value = ''; 
    price.value = ''; 
    let icon = document.querySelector('.icon'); 
    icon.addEventListener('click', () => { 
        list.style.display = "none" 
    }); 
    icon.style.fontSize = "30px" 
});

