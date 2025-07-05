// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};
// hamburger menu di klik dimana saja
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// Search menu di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}
// search di klik dimana saja
const searchButton = document.querySelector('#search-button');
document.addEventListener('click', function(e){
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart'); // halaman shopping cart
const sc = document.querySelector('#shopping-cart-button'); //icon shopping cart

document.querySelector('#shopping-cart-button').onclick = (e) => { //jika icon shopping cart ditekan, maka halaman shopping cart menjadi active
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

document.addEventListener('click', function(e){
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) { //jika menyentuh diluar icon shopping cart dan halaman shopping cart, maka matikan active
        shoppingCart.classList.remove('active');
    }
});



// Modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});


// Klik Tombol CLose
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

//Klik diluar modal
window.onclick = (e) =>{
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none'
    }
}
    
