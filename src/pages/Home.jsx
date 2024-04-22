import nhhk from '../assets/nhhk.jpg'
import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <div className=" dark:text-white h-full relative">
            <div className=" py-14 lg:pt-28 flex flex-col w-full lg:px-44 lg:flex-row justify-center items-center">
                <div className=' lg:w-1/2 items-center mb-10 lg:mb-0'>
                    <img src={nhhk} alt="" className=' h-[300px] w-[300px] rounded-3xl lg:rotate-3 lg:mb-10 mb-4' />
                    <div className='flex text-4xl space-x-6 pl-24'>
                        <Link to='https://www.linkedin.com/in/huu-khang/' target='_blank' className=' hover:scale-150'>
                            <i className="fa-brands fa-linkedin"></i>
                        </Link>
                        <Link to='https://github.com/hkhangus' target='_blank' className=' hover:scale-150'>
                            <i className="fa-brands fa-github"></i>
                        </Link>
                    </div>
                </div>
                <div className=' w-1/2 items-center'>
                    <h1 className=' font-semibold text-2xl text-center'>Welcome! I'm Nguyễn Huỳnh Hữu Khang</h1>
                    <br />
                    <p className=' text-justify'>I am a third-year student with expertise in Software Development at Ho Chi Minh University of Science. I'm interested in full-stack web development and app development. My career goal is to create an app or system that brings benefits to society. One of my favorite quotes is</p>
                    <br />
                    <p className=' text-center font-medium text-2xl text-cyan-500 text-opacity-75'>“Stay hungry, stay foolish”</p>
                    <span className=' flex justify-end italic'>- Steve Jobs</span>
                </div>
            </div>
            {/* <img src={nhhk} alt="" className=' h-[200px] w-[200px] rounded-full' /> */}
        </div>        
    )
        
}