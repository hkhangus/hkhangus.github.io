import resume from "../assets/nhhkhang_resume.pdf";

export default function Resume(){
    return (
        <div className=" p-12">
            
            <a href={resume} download className=" flex justify-center mb-4">
                <button className=" bg-cyan-500 p-2 text-white rounded-lg dark:text-slate-900">Download</button>
            </a>
            

            <iframe src={resume} className=" w-full h-[400px] lg:h-[800px]" >
                #Document({resume})
            </iframe>
        </div>
    )
}