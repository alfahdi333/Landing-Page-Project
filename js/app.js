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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//Define Global Variables
const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
 

//Build the nav
const buildNav = () =>
 {
    // empty string to store the navigation HTML
    let htmlNav = '';

    sections.forEach(section =>
        {
        // take the section's ID and navigation text and extract them.
        const idSection = section.id;
        const navDataSection = section.dataset.nav;
        
        // add a list item to the navigation HTML string for each part, each containing a link
        htmlNav += `<li><a class="menu__link" href="#${idSection}">${navDataSection}</a></li>`;
    });
    
    //put the innerHTML
    nav.innerHTML = htmlNav;
}; 

buildNav();

// Add class 'active' to section when near top of viewport

// Calculate offset of the section
const calculateOffset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

//class remove 'your-active-class'
const removeActiveClasses = (section, link) => {
    section.classList.remove('your-active-class');
    link.classList.remove('active');
};

//class add 'your-active-class' and 'active' class to navigation link
const addActiveClasses = (addClass, section, link) => {
    if (addClass) {
        section.classList.add('your-active-class');
        link.classList.add('active');
    }
};

//update the active section and navigation link
const activeSection = () => {
    sections.forEach((section, index) => {
        const elementView = calculateOffset(section);
        const inViewport = () => elementView < 150 && elementView >= -150;

        const navLinks = document.querySelectorAll('.navbar__menu a');
        const activeNavLink = navLinks[index];

        removeActiveClasses(section, activeNavLink);
        addActiveClasses(inViewport(), section, activeNavLink);
    });
};


//event listener for scroll events
window.addEventListener('scroll', activeSection);


// Scroll to anchor ID using scrollTO event

const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // scroll to the clicked section 
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // highlight the clicked section
            sections.forEach((section) => {
                removeAct(section);
            });
            addAct(true, targetSection);
        });
    });

    // Add event listener to the document to remove active class on click outside the webpage
    document.addEventListener('click', (event) => {
        const isOutsideWebpage = !event.target.closest('body');
        if (isOutsideWebpage) {
            sections.forEach((section) => {
                removeAct(section);
            });
        }
    });
};

scrolling();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


