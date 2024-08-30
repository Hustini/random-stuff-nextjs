import NavBar from "./compontents/NavBar"
import RawCss from '@/app/compontents/RawCss';
import ProjectCard from '@/app/compontents/ProjectCard';
import Footer from '@/app/compontents/footer';

export default function Home() {
  return (
    <main>
        <NavBar />
        <h1 className='text-center text-2xl text-gray-800 m-10 px-2.5'>Welcome to my experimental playground! Here, I test out random ideas, explore new features, and experiment with Next.js. Feel free to browse around and see what I am working on. Enjoy the journey!</h1>
        <RawCss />
        <div className="flex flex-wrap items-center justify-center w-full mb-4 gap-4">
            <ProjectCard buttonText={"Project 1"} />
            <ProjectCard buttonText={"Project 2"} />
            <ProjectCard buttonText={"Project 3"} />
            <ProjectCard buttonText={"Project 4"} />
            <ProjectCard buttonText={"Project 5"} />
            <ProjectCard buttonText={"Project 6"} />
        </div>
        <Footer />
    </main>
  );
}
