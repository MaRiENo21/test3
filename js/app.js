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
const section = document.getElementsByTagName('section');
const dataNavs = [];
const sectionMapping = {};
const mapSectionToList = {};

/**
 * End Global Variables
 * Start Helper Functions + Main Functions
 * 
*/

// build the nav
// Build menu 
/* Sections auslesen und Array(data-nav) speichern */

for (let el of section){
    dataNavs.push(el.getAttribute("data-nav"));
    /* -------------VERSTEHE ICH NICHT */
    sectionMapping [el.getAttribute ("data-nav")] = el;
}

const navbar = document.getElementById('navbar__list');

// Scroll to section on link click
function scrollen(htmlNode){
    tmlNode.scrollIntoView({block: "start", behavior: "smooth"});
}

let letztesGeklicktesElement;
/* Listenelemente erstellen & zu Anker springen */
/* for(let el of dataNav) = for(let i=0; i<dataNavs.length;i++) */
const navListenElemente = [];

for (let el of dataNavs){
    const liste = document.createElement("li");
    liste.innerHTML = el;
    liste.addEventListener("click",()=>{
        scrollen(sectionMapping[el]);
    });
    navbar.appendChild(liste);
    
    navListenElemente.push(liste);
    mapSectionToList[el] = liste;
}

console.log(Object.keys(mapSectionToList));

// Add class 'active' to section when near top of viewport

// Set sections as active
function makeActive(){
    for (let dn of dataNavs){
        let el = sectionMapping[dn];
        let navEl = mapSectionToList[dn];
        const box = el.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
             // Apply active state on the current section and the corresponding Nav link.
            el.classList.add("your-active-class");
            navEl.style.color = '#cc1';
          } else {
            // Remove active state from other section and corresponding Nav link.
            el.classList.remove("your-active-class");
            navEl.style.color = 'rgba(136,203,171,1)';
          }
    } 
}

// Make sections active
document.addEventListener("scroll", function() {
    makeActive();
  });


