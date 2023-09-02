// import Projects from "../project-data/Projects.json";
// import Project from "../project-data/Project.jsx";

// function projectsDisplay() {
//     return (
//         <div class="p">
//             <h1>
//                 {Projects.map((Project) => (
//                     <Project data={Project} />
//                 ))}
//             </h1>
//         </div>
//     )
// }

// export default projectsDisplay

import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Note-taker',
            description: 'A note taking app!',
            demoLink: 'https://mighty-hamlet-98776-5aafaf96d0e0.herokuapp.com/',
            githubLink: 'https://github.com/guapjorge/Note-Saver'
        },
        // {
        //     title: 'Tech-blog',
        //     description: 'bcryptjs, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, sequelize',
        //     demoLink: 'https://bs3102798-tech-blog-d05f0f76899a.herokuapp.com/',
        //     githubLink: 'https://github.com/bs3102798/Tech-blog'
        // },

        // {
        //     title: 'SQL-Employee-Tracker',
        //     description: 'dependencies, cfonts, chalk,console.table,inquirer, mysql2',
        //     demoLink: 'https://project2-demo.com/',
        //     githubLink: 'https://github.com/bs3102798/SQL-Employee-Tracker'
        // },
        {
            title: 'e-commerce store',
            description: 'A e-commerce website that sells it all!',
            githubLink: 'https://github.com/guapjorge/gababara'
        },

    ];

    return (
        <section>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;