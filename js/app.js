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

// build the nav

/* Sections auslesen und Array(data-nav) speichern */
const section = document.getElementsByTagName('section');
const dataNavs = [];
const sectionMapping = {};
for(let el of section){
    dataNavs.push(el.getAttribute("data-nav"));
    sectionMapping [el.getAttribute ("data-nav")] = el;
}
console.log(dataNavs);

const navbar = document.getElementById('navbar__list');


function scrollen(htmlNode){
htmlNode.scrollIntoView({block: "start", behavior: "smooth"});
}

let letztesGeklicktesElement;
/* Listenelemente erstellen & zu Anker springen */
/* for(let el of dataNav) = for(let i=0; i<dataNavs.length;i++) */
for(let el of dataNavs){
    const liste = document.createElement("li");
    liste.innerHTML = el;
    liste.addEventListener("click",()=>{
        scrollen(sectionMapping[el]);
        /* Reihenfolge wichtig! macht zuerst bei click grün, dann if übrspringen, dann merkt er sich, dass letztesGeklicktesElement = liste, dann fängt er von vorne an und kann diesmal if ausführen */
        liste.style.color = '#cc1';
        if(letztesGeklicktesElement){
            letztesGeklicktesElement.style.color = 'rgba(136,203,171,1)';
        }
        letztesGeklicktesElement = liste;
    });
    navbar.appendChild(liste);
}


/*navbar.style.color = 'blue';*/





// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


