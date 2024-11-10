import { title } from "process"
import ProjectCard from "./ProjectCard"


const projectData = [
    {
        id:1,
        title: "React Todo App",
        description:"Our ToDo app is a simple, intuitive productivity tool designed to help you organize tasks, set priorities, and stay on top of deadlines. With an easy-to-navigate interface, users can create, edit, and delete tasks,",
        image:"/images/todo.png",
        gitUrl:"https://github.com/Shabbir811/todo-app.git",
        previewUrl:"https://todo-app-seven-roan-60.vercel.app/",

    },
    {
        id:2,
        title: "Tic Tac Toe game",
        description:"Our Tic Tac Toe game is a simple designed by using html, css",
        image:"/images/tic-tac-toe.png",
        gitUrl:"https://github.com/Shabbir811/project_00_tic_tac_toe.git",
        previewUrl:"https://tic-tac-toe-by-shabbir.vercel.app/",
        

    },
    {
        id:3,
        title: "Resume Builder App",
        description:"Our Resume Builder app is a simple, intuitive productivity tool designed by plain html, css, typescript  which helps you to build a resume or Cv",
        image:"/images/resume.png",
        gitUrl:"https://github.com/Shabbir811/unique-path-and-shereable-resume-milestone-5.git",
        previewUrl:"https://vercel.com/shabbirs-projects-f45297bc/shereable-resume-milestone-5/7ZYuxN6eqzRS1Ztm2PEeQuzQXdQx",
      

    }
]


function ProjectSection() {
  return (
     <>
        <h2 className="text-5xl font-semibold text-center mb-6">My Projects</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-8 lg:gap-16 grid-cols-1 h-full">
            {
                projectData.map(
                    (project)=> <ProjectCard 
                        key={project.id} 
                        title={project.title}  
                        description={project.description}  
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}/>
                )
            }
        </div>
     </>
  )
}

export default ProjectSection
