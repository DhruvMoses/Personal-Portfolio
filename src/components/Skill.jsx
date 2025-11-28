import React from 'react'
import SkillCard from './SkillCard'

export default function Skill(props) {
    
    const skillItem = [
            {
                imgSrc: '/java.svg',
                label: 'Java',
            },
            {
                imgSrc: '/dataStructure.svg',
                label: 'Data Structures & Algorithms',
            },
            {
                imgSrc: '/python.svg',
                label: 'Python',
            },
            {
                imgSrc: '/html5.svg',
                label: 'HTML',
            },
            {
                imgSrc: '/css3.svg',
                label: 'CSS',
            },
            {
                imgSrc: '/tailwindcss.svg',
                label: 'TailwindCSS',
            },
            {
                imgSrc: '/javascript.svg',
                label: 'JavaScript',
            },
            {
                imgSrc: '/react.svg',
                label: 'React',
            },
            {
                imgSrc: '/nodejs.svg',
                label: 'NodeJS',
            },
            {
                imgSrc: '/github.svg',
                label: 'GitHub',
            },
    ]

    return (
        <>
            <section className='mt-5' id='skills'>
                <div className='container mt-20 px-4 mx-auto lg:px-8 xl:max-w-6xl'>

                    <h2 className='headline-2 text-3xl lg:text-4xl lg:leading-tight font-semibold'>
                        My Skills
                    </h2>

                    <p className='text-zinc-400 mt-3 mb-8 max-w-[70ch]'>
                        These are the skills that I've been using to create
                        exceptional, high-performing websites and applications
                    </p>

                    <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                        {
                            skillItem.map(({ imgSrc, label }, key) => (
                                <SkillCard
                                imgSrc={imgSrc}
                                label={label}
                                key={key}
                                />
                            ))
                        }
                    </div>

                </div>
            </section>
        </>
    )
}
