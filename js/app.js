/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */




/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active


let sectionsComponents = document.querySelectorAll("section");
let Lists = document.getElementById("ulList");
const upButton = document.getElementById('upButton')




function AddedUL() {
    sectionsComponents.forEach(sectionAddList => {
        // Create List
        let list = document.createElement("li");
        // set Class into list
        list.classList.add("nav-item")
            /////////////////////////////////////////
            // Create link 
        let links = document.createElement("a");
        // set class and href into link 
        links.classList.add("nav-link");
        console.log(list)
        const textNode = document.createTextNode(sectionAddList.id);
        links.appendChild(textNode);
        links.setAttribute("data-link", sectionAddList.id);
        list.appendChild(links)
        Lists.appendChild(list)

    })
}

function BoundSec() {
    let targetSection = sectionsComponents[0];
    sectionsComponents.forEach(sectionRect => {
        let rect = sectionRect.getBoundingClientRect()
        if (rect.top > 0 && rect.top < 600) {
            targetSection = sectionRect;
        }


        console.log(rect.top)
    })
    return targetSection;
}

function scrollWindow() {
    window.addEventListener('scroll', (e) => {
        upButton.style.display = "block"
        let scrollSec = BoundSec();
        scrollSec.classList.add('your-active-class');

        sectionsComponents.forEach(activeSec => {
            if (activeSec.id != scrollSec.id & activeSec.classList.contains('your-active-class')) {
                activeSec.classList.remove('your-active-class');
            }
        })

        const activeLink = document.querySelector(`a[data-link="${scrollSec.id}"]`)
        activeLink.classList.add('active')

        const classActive = document.querySelectorAll('.nav-link');
        classActive.forEach(classActive => {
            if (classActive.dataset.link != activeLink.dataset.link & classActive.classList.contains('active')) {
                classActive.classList.remove('active')
            }
        })

    })
}

function ScrollLinks() {
    Lists.addEventListener("click", (e) => {
        console.log(e.target.dataset.link)
        const sectionView = document.querySelector('#' + e.target.dataset.link)
        sectionView.scrollIntoView({ 'behavior': 'smooth' });
        console.log(sectionView)

    })

    if (document.body.scrollTop > 300) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}
upButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


// build the nav
AddedUL();


// Add class 'active' to section when near top of viewport

scrollWindow();


// Scroll to anchor ID using scrollTO event
ScrollLinks();