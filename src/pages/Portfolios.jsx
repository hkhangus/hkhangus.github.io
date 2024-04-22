import Project from "../features/Project"
import { projects } from "../assets/project"

export default function Portfolios(){
    return (
        <div className=" flex flex-wrap w-full justify-center">
            {projects.map((project, index) => (
                <Project key={index} project={project}/>
            ))}
            {/* <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/> */}
        </div>
    )
}