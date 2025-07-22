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
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h4 class="text-xl font-bold mb-2 text-blue-600">${project.title}</h4>
                    ${project.image ? `<img src="http://127.0.0.1:8000${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-md mb-4">` : ''}
                    <p class="text-gray-700 mb-4">${project.description}</p>
                    ${project.url ? `<a href="${project.url}" target="_blank" class="text-blue-500 hover:underline">Ver Proyecto</a>` : ''}
                </div>
            `;
            projectsContainer.innerHTML += projectCard;
        });
    }

    // Función para obtener habilidades
    async function fetchSkills() {
        try {
            // Asegúrate de que esta URL coincida con tu endpoint de DRF
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

    // Función para renderizar habilidades (usa clases de Tailwind)
    function renderSkills(skills) {
        skillsContainer.innerHTML = '';
        if (skills.length === 0) {
            skillsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500">No hay habilidades disponibles.</p>';
            return;
        }
        skills.forEach(skill => {
            const skillCard = `
                <div class="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <h4 class="text-lg font-semibold text-blue-800">${skill.name}</h4>
                    <p class="text-gray-600">Nivel: ${skill.level}</p>
                </div>
            `;
            skillsContainer.innerHTML += skillCard;
        });
    }

    // Llama a las funciones para cargar los datos al cargar la página
    fetchProjects();
    fetchSkills();
});