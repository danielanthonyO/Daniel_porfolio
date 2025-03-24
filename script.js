
// toggle
const sideMenu = document.getElementById('sideMenu');

function openMenu(){
    sideMenu.style.right = '0';
}

function closeMenu(){
    sideMenu.style.right = '-200px';
}


// menu list 
function toggleMenu() {
    let menuList = document.querySelector('.menuList');
    if (window.innerWidth <= 690) { 
        menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
    }
}



// dark theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    let themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.classList.toggle('fa-sun');
    themeIcon.classList.toggle('fa-moon');
}



// modal 
document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay = document.getElementById("modalOverlay");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close-btn");

    function closeModal() {
        modalOverlay.style.display = "none";
    }


    openModalBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        modalOverlay.style.display = "flex";
    });

 
    closeModalBtn.addEventListener("click", closeModal);

 
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

 
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.querySelector("#back-to-top");

    if (!backToTop) return; 

    window.addEventListener("scroll", () => {
        if (window.scrollY > 1800) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
