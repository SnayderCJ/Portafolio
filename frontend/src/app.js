// frontend/src/app.js (versión corregida y mejorada)

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const skillsContainer = document.getElementById('skills-container');

    async function fetchProjects() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/projects/');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const projects = await response.json();
            renderProjects(projects);
        } catch (error) {
            console.error('Error fetching projects:', error);
            projectsContainer.innerHTML = '<p class="text-red-500">Error al cargar proyectos.</p>';
        }
    }

    function renderProjects(projects) {
        projectsContainer.innerHTML = '';
        if (projects.length === 0) {
            projectsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500">No hay proyectos disponibles.</p>';
            return;
        }
        projects.forEach(project => {
            const projectCard = `
                <div class="group relative overflow-hidden rounded-2xl glass-effect card-hover border border-white/10">
                    ${project.image ? `<img src="${project.image}" alt="${project.title}" class="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110">` : '<div class="w-full h-72 bg-slate-800 flex items-center justify-center"><p class="text-gray-500">Sin imagen</p></div>'}
                    
                    <div class="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h4 class="text-2xl font-bold gradient-text mb-2">${project.title}</h4>
                        <p class="text-gray-300 mb-4 text-sm">${project.description}</p>
                        ${project.url ? `<a href="${project.url}" target="_blank" class="mt-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">Ver Proyecto</a>` : ''}
                    </div>
                </div>
            `;
            projectsContainer.innerHTML += projectCard;
        });
    }

    async function fetchSkills() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/skills/');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const skills = await response.json();
            renderSkills(skills);
        } catch (error) {
            console.error('Error fetching skills:', error);
            skillsContainer.innerHTML = '<p class="text-red-500">Error al cargar habilidades.</p>';
        }
    }

    function renderSkills(skills) {
        skillsContainer.innerHTML = '';
        if (skills.length === 0) {
            skillsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500">No hay habilidades disponibles.</p>';
            return;
        }
        skills.forEach(skill => {
            const skillCard = `
                <div class="glass-effect p-6 rounded-xl border border-white/10 text-center card-hover">
                    <h4 class="text-xl font-semibold text-white mb-2">${skill.name}</h4>
                    <p class="text-blue-300">${skill.level}</p>
                </div>
            `;
            skillsContainer.innerHTML += skillCard;
        });
    }

    // Llama a las funciones para cargar los datos al cargar la página
    fetchProjects();
    fetchSkills();

    // --- CÓDIGO EXTRA PARA EL MENÚ MÓVIL Y NAVBAR (SIN CAMBIOS) ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-slate-900/50');
        } else {
            navbar.classList.remove('bg-slate-900/50');
        }
    });
});