import eximg1 from '../../assets/img/download.jpeg'
import { FaArrowRight } from "react-icons/fa";

function Excersise() {
  return (
    <>
    <div className='grid grid-cols-3 px-[1.8rem] my-auto'>
        <div className="text-[1.55rem] text-white">
            <h3 className="text-yellow-400 ">01</h3>
            <h4>Global Brand</h4>
        </div>
        <div>
            <img src={eximg1} alt="" />
        </div>
        <div className="text-[18px] text-white">
            <h3 className="text-[1.5rem]  text-yellow-400  my-3">Out For The Day <br /> One cargpo pant</h3>
            <p className="my-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel eaque est quos facilis veniam  alias tenetur, consequatur vero, 
                dolor commodi repudiandae  soluta, incidunt deleniti sunt saepe quasi? Consectetur, porro!</p>
            <div className='flex items-center gap-2'>
                  <button className='px-5 py-3 text-black bg-yellow-400 rounded-xl'>Explore</button>
                 
                 <a href=""> <FaArrowRight className='text-white border-yellow-400 rounded-xl border-1' /></a>
                
               
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Excersise