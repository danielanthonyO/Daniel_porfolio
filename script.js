const bar = document.getElementById('bar');
const menu = document.getElementById('menu');

if(bar){
    bar.addEventListener('click', () =>{
        menu.classList.toggle('active');
    })}


// scripts for recent job heading
const sortBtns = document.querySelectorAll(".job-id > * ")
// scripts for sorting on click jobs
const sortItems = document.querySelectorAll(".jobs-container > *")

sortBtns.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        sortBtns.forEach((btn) => btn.classList.remove("active"))
        btn.classList.add("active")

        // scripts for sorting on click jobs (delete in css)
        const targetData = btn.getAttribute("data-target")
        sortItems.forEach((item) =>{
            item.classList.add("delete")
            
            if(item.getAttribute("data-item") === 
            targetData || targetData === "all"){
                item.classList.remove("delete");
            }
        })
    })
})


const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    
    // Save theme preference
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModalBtn = document.querySelector(".close-btn");

    // Open Modal
    openModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modalOverlay.style.display = "flex";
    });

    // Close Modal
    closeModalBtn.addEventListener("click", () => {
        modalOverlay.style.display = "none";
    });

    // Close when clicking outside the modal
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = "none";
        }
    });
});



 // Smooth Back to Top
 window.onscroll = () => {
    document.querySelector('.top-btn').style.display = window.scrollY > 500 ? 'block' : 'none';
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}