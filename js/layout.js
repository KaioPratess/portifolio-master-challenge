export default function layoutChange() {

// Select radio inputs
const btn1 = document.querySelector('.layout_1_btn');
const btn2 = document.querySelector('.layout_2_btn');

// Select all the sections
const structure = document.querySelector('.structure');
const header = document.querySelector('.header')
const profile = document.querySelector('.profile');
const skills = document.querySelector('.skills');
const blog = document.querySelector('.blog');
const experiences = document.querySelector('.experiences');
const projects = document.querySelector('.projects');
const projectsStructure = document.querySelector('.projects_structure');
const pages = document.querySelector('.pages');
const footer = document.querySelector('.footer');

const sections = [structure, header,   profile, skills, blog, experiences, projects, projectsStructure,  pages, footer];

// Functions
function addLayout1 () {
  // Do a loop through the sections array
  sections.forEach((item) => {
    // Add the class layout_1
    item.classList.add('layout_1');
    // Remove the class layout_2
    item.classList.remove('layout_2');
  })
}

function addLayout2 () {
  // Do a loop through the sections array
  sections.forEach((item) => {
    // Add the class layout_2
    item.classList.add('layout_2');
    // Remove the class layout_1
    item.classList.remove('layout_1');
  })
}

// Add events to the radio inputs
btn1.addEventListener('click', addLayout1);
btn2.addEventListener('click', addLayout2);

}