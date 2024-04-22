import { Link } from "react-router-dom"

// const project = {
//     title: 'The Coffee Choi',
//     class: 'Web Development',
//     techstack: ['React', 'Tailwind CSS', 'NodeJS', 'Express', 'MongoDB'],
//     task: [
//         'Developed the front-end using React and Tailwind CSS',
//         'Developed the back-end using NodeJS and Express',
//         'Used MongoDB as the database',
//     ],
//     learned: [
//         'Learned how to use React',
//         'Learned how to use Tailwind CSS',
//         'Learned how to use NodeJS and Express',
//         'Learned how to use MongoDB',
//     ],
//     github: 'github.com/hkhangus',
//     demo: 'https://thecoffeechoi.netlify.app'
// }


/* eslint react/prop-types: 0 */
export default function Project({ project }){
    return (
        <div className=" border-solid border-2 border-gray-400 lg:basis-5/12 basis-full mx-4 my-4 p-6 shadow-sm rounded-lg transform hover:scale-105 hover:shadow-lg transition-transform duration-200 dark:text-white">
            <h1 className=" font-bold text-cyan-500 text-3xl text-center">{project.title}</h1>
            <div className=" flex justify-center mt-2 font-medium mb-4">
                {project.github && 
                    <Link to={project.github} target="_blank" className=" mr-4 hover:underline">Github</Link>
                }
                {project.demo && 
                    <Link to={project.demo} target="_blank" className=" hover:underline">Demo</Link>
                }
            </div>
            {project.class ? <p className=" font-medium text-center text-lg">Project of <span className=" text-cyan-500">{project.class}</span> class</p> : 
            <p className=" font-medium text-center text-lg">
                Self-learning project
            </p>}
            <p className=" text-lg mt-2">
                <span className=" font-medium text-cyan-500">
                    Tech stack:
                </span>
                {project.techstack?.map((tech, index) => (
                    <span key={index}> {tech}</span>
                ))}
            </p>
            {/* <h2 className=" text-lg font-medium mt-2 text-cyan-500">My tasks</h2> */}
            <ul className=" list-disc">
                {project.task?.map((task, index) => (
                    <li key={index} className=" ml-4">{task}</li>
                ))}
            </ul>            
        </div>
    )
}