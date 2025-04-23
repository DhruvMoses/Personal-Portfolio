import React from 'react';
import Data from './Data';
import Card from './Card';

export default function Experience() {
  return (
    <section className="pt-20" id="experience">
      <div className="container px-4 mx-auto lg:px-8 xl:max-w-6xl"> 
        <h2 className="headline-2 text-3xl mb-5 mt-5 lg:text-4xl lg:leading-tight font-semibold">
          Experience
        </h2>
        
        <div className="experience-container grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="timeline bg-zinc-800/50 rounded-2xl shadow-md p-7 w-full">
            <h3 className="text-white text-2xl font-semibold mb-4">Education</h3>
            {Data.map((val, id) => {
              if (val.category === 'education') {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
              return null;
            })}
          </div>

          <div className="timeline bg-zinc-800/50 rounded-2xl shadow-md p-7 w-full">
            <h3 className="text-white text-2xl font-semibold mb-4">Experience</h3>
            {Data.map((val, index) => {
              if (val.category === 'experience') {
                return (
                  <Card
                    key={index}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}