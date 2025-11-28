import React from 'react';

export default function About(props) {
  return (
    <>
      <section id="about" className="pt-20">
        <div className="container px-4 mx-auto lg:px-8 xl:max-w-6xl">
          <div className="flex items-start gap-6 bg-zinc-800/50 p-7 rounded-2xl md:p-12 w-full mx-auto">
            
            
            <figure className="hidden lg:block w-90 h-90 min-w-[300px] rounded-xl overflow-hidden border border-zinc-700 shadow-md">
              <img
                src="./my-image.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </figure>

            
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed">
              Welcome! I&apos;m Dhruv Moses Vats, I am a passionate developer with strong learning skills and a solid foundation in JavaScript, React.js and Data Structures & Algorithms. I actively build high-quality projects to enhance my skills and stay updated with modern web development trends. I'm now looking for an opportunity to contribute to a dynamic company where I can grow and apply my knowledge effectively.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
