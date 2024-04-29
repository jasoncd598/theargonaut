import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div className="navbar bg-base-100 fixed z-10">
          <div className="">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#home-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#contact-section">Contact</a></li>
                <li><a href="#projects-section">Projects</a></li>
              </ul>
            </div>
          </div>
          <div className="justify-center hidden w-full lg:flex">
            <ul className="menu menu-horizontal">
              <li><a href="#home-section">Home</a></li>
              <li><a href="#about-section">About</a></li>
              <li><a href="#contact-section">Contact</a></li>
              <li><a href="#projects-section">Projects</a></li>
            </ul>
          </div>
      </div>
      </section>

      <section>
        <div id="home-section" className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-lg flex flex-col justify-center items-center">
              <div className="relative w-full max-w-36 aspect-square pt-5">
               <Image className="mask mask-hexagon" src={'/unnamed.png'} alt="profile" fill />
              </div>
              <h1 className="font-bold pt-5 text-lg md:text-5xl">Let&#39;s build something great together</h1>
              <p className="py-3">
                With three years of focused experience in React Native Expo, I specialize in developing seamless, cross-platform mobile applications. Passionate about user-centric design and performance optimization, I excel in crafting innovative solutions that elevate user experiences.
              </p>
              <button className="btn btn-primary">Download CV</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="about-section" className="min-h-screen flex flex-col justify-center items-center bg-blue-400">
          <h1>About</h1>
        </div>
      </section>

      <section>
        <div id="contact-section" className="min-h-[50vh] flex flex-col justify-center items-center bg-blue-500">
          <h1>Contact</h1>
        </div>
      </section>

      <section>
        <div id="projects-section" className="min-h-screen flex flex-col justify-center items-center bg-blue-600">
          <h1>Projects</h1>
        </div>
      </section>
    </main>
  )
}