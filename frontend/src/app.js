document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const skillsContainer = document.getElementById('skills-container');
    
    // URL del backend en producción
    const API_BASE_URL = 'https://snayder-portafolio-backend.onrender.com';

    async function fetchProjects() {
        try {
            // --- CAMBIO AQUÍ ---
            const response = await fetch(`${API_BASE_URL}/api/projects/`);
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
            // --- CAMBIO AQUÍ ---
            const response = await fetch(`${API_BASE_URL}/api/skills/`);
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
            <div class="glass-effect p-6 rounded-xl border border-white/10 card-hover">
                <div class="flex justify-between items-center mb-2">
                    <h4 class="text-xl font-semibold text-white">${skill.name}</h4>
                    <p class="text-blue-300 font-semibold">${skill.level}%</p>
                </div>
                <div class="w-full bg-slate-700 rounded-full h-2.5">
                    <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style="width: ${skill.level}%"></div>
                </div>
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

    // --- CÓDIGO PARA EL FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = 'Enviando...';
        submitButton.disabled = true;

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        try {
            // --- CAMBIO AQUÍ ---
            const response = await fetch(`${API_BASE_URL}/api/contact/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                contactForm.reset(); // Limpia el formulario
                submitButton.innerHTML = '¡Mensaje Enviado! ✔';
            } else {
                throw new Error('Hubo un problema con la solicitud.');
            }
        } catch (error) {
            console.error('Error en el formulario de contacto:', error);
            submitButton.innerHTML = 'Error al Enviar';
        } finally {
            setTimeout(() => {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            }, 5000); // Restaura el botón después de 5 segundos
        }
    });
});