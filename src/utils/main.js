document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger-menu");
  var navMenu = document.querySelector(".nav-menu");

  if (burger && navMenu) {
    burger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
  
  // ---------------------- TEMPLATE BIO ---------------------- \\
  const bios = document.querySelector("#bios");
  const bioEl = document.querySelector(".bio");
  const options = document.querySelector(".bio-length-options");

  if (bios && bioEl && options) {
    const biosContent = bios.content.cloneNode(true);
    const defaultBio = biosContent.querySelector('[data-length="long"]');
    
    // Additional check here
    if (defaultBio) {
      bioEl.innerHTML = defaultBio.innerHTML;
    }
    
    options.addEventListener("change", (e) => {
      const selectedBio = biosContent.querySelector(`[data-length=${e.target.value}]`);
      
      // Additional check here
      if (selectedBio) {
        bioEl.innerHTML = selectedBio.innerHTML;
      }
    });
  }

  // ---------------------- TEMPLATE SKILLS ---------------------- \\
  const skills = document.querySelector("#skills");
  const skillDetails = document.querySelector("#skillsdetails");
  const skillRecap = document.querySelector(".skillsRecap");
  const option = document.querySelectorAll(".skill-input");
  const skillsR = document.querySelector("#skillsR");

  if (skills && skillDetails && skillRecap && option && detailsParagraph) {
    const skillsRContent = skillsR.content.cloneNode(true);
    const defaultSkill = skillsRContent.querySelector(`[data-name="front"]`);
  
    // Check if defaultSkill exists
    if (defaultSkill) {
      skillRecap.innerHTML = defaultSkill.innerHTML;
    }
  
    option.forEach((option) => {
      option.addEventListener("change", (e) => {
        const selectedSkill = skillsRContent.querySelector(`[data-name="${e.target.value}"]`);
  
        // Check if selectedSkill exists
        if (selectedSkill) {
          skillRecap.innerHTML = selectedSkill.innerHTML;
        }
      });
    });
  }

  // ---------------------- TEMPLATE PROJECTS ---------------------- \\
  const projectItems = document.querySelector("#project-items");
  const projectEl = document.querySelector("#projects-checked");
  const formEl = document.querySelector(".project-list-control");

  if (projectItems && projectEl && formEl) {
    const projectItemsContent = projectItems.content;
    const defaultProject = projectItemsContent.querySelector('[data-project-name="inkfection"]');
  
    // Check if defaultProject exists
    if (defaultProject) {
      projectEl.appendChild(defaultProject.cloneNode(true));
    }
  
    formEl.addEventListener("change", (e) => {
      if (e.target.name === 'project') {
        
        const selectedProject = projectItemsContent.querySelector(`[data-project-name="${e.target.value}"]`);
  
        // Check if selectedProject exists
        if (selectedProject) {
          projectEl.innerHTML = "";
          projectEl.appendChild(selectedProject.cloneNode(true));
        }
      }
    });
  }
});