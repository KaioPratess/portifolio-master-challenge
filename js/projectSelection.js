export default function projectSelection() {
  // Select tag buttons
  const reactBtn = document.querySelector('.react_btn');
  const vueBtn = document.querySelector('.vue_btn');
  const responsiveBtn = document.querySelector('.responsive_btn');
  
  // Select projects
  const reactProjects = document.querySelector('.react');
  const vueProjects = document.querySelector('.vue');
  const responsiveProjects = document.querySelector('.responsive');
  
  // Functions
  function showReactProjects() {
    reactProjects.classList.add('active');
    vueProjects.classList.remove('active');
    responsiveProjects.classList.remove('active');
  }
  
  function showVueProjects() {
    vueProjects.classList.add('active');
    reactProjects.classList.remove('active');
    responsiveProjects.classList.remove('active');
  }
  
  function showResponsiveProjects() {
    responsiveProjects.classList.add('active');
    vueProjects.classList.remove('active');
    reactProjects.classList.remove('active');
  }
  
  
  // Create Events
  reactBtn.addEventListener('click', showReactProjects);
  vueBtn.addEventListener('click', showVueProjects);
  responsiveBtn.addEventListener('click', showResponsiveProjects);
  
  }