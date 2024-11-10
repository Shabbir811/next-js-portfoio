import { CodeBracketIcon , EyeIcon} from "@heroicons/react/16/solid"
import Link from "next/link"


function ProjectCard({imgUrl , title , description, gitUrl , previewUrl}:{imgUrl:string, title:string, description:string, gitUrl:string , previewUrl:string}) {
  return (
    <div className="flex  flex-col h-full">
        <div style={{background:`url(${imgUrl})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}
            className='h-52 md:h-72 rounded-t-xl relative group'
        >
            <div className='overlay justify-center items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 '>
              <Link href={gitUrl}
                className="h-14 w-14 border-2 m-2 relative rounded-full border-[#adb7be] hover:border-white group/link"  >
                <CodeBracketIcon
                    className="h-10 w-10 text-[#adb7be]  absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </Link> 
              <Link href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"  >
                 <EyeIcon
                    className="h-10 w-10 text-[#adb7be]  absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </Link> 
            </div>   
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4 mb-8'>
            <h2 className='text-xl font-bold mb-2 '>
                {title}
            </h2>
            <p className='text-[#adb7be]'>
                {description}
            </p>

        </div>
     </div>
  )
}

export default ProjectCard
