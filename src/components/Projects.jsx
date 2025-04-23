import React from 'react'
import ProjectCard from './ProjectCard';

export default function Projects(props) {

    const projects = [
        {
          imgSrc: '/project-1.png',
          title: 'Online Code Editor',
          tags: ['HTML' , 'SCSS' , "JavaScript" , 'ReactJS'],
          projectLink: 'https://online-code-editor-woad.vercel.app/'
        },
        {
          imgSrc: '/project-2.png',
          title: 'Ai Image Enhancer',
          tags: ['HTML' , 'TailwindCSS' , "JavaScript" , 'ReactJS'],
          projectLink: 'https://ai-image-enhancer-five.vercel.app/'
        },
        {
          imgSrc: '/project-3.png',
          title: 'Personal Portfolio',
          tags: ['HTML' , 'TailwindCSS' , "JavaScript" , 'ReactJS'],
          projectLink: ''
        },
        {
          imgSrc: '/project-4.png',
          title: 'Currency Converter',
          tags: ['HTML' , 'TailwindCSS' , "JavaScript" , 'ReactJS'],
          projectLink: 'https://currency-converter-nu-one.vercel.app/'
        },
        {
          imgSrc: '/project-5.png',
          title: 'Weather App',
          tags: ['HTML' , 'CSS' , "JavaScript"],
          projectLink: 'https://weather-app-dhruv-moses-projects.vercel.app/'
        },
        {
          imgSrc: '/project-6.png',
          title: 'To-Do App',
          tags: ['HTML' , 'CSS' , "JavaScript"],
          projectLink: 'https://to-do-app-eight-steel.vercel.app/'
        },
      ];

    return (
        <>
            <section
            id='projects'
            className='section'
            >
                <div className='container mt-20 px-4 mx-auto lg:px-8 xl:max-w-6xl'>

                    <h2 className='headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold mb-6'>
                        My Projects
                    </h2>

                    <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                        {projects.map(({imgSrc, title, tags, projectLink},key)=> (
                            <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
