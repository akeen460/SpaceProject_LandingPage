import logo from '../../assets/img/240_F_549139018_w811opwOU8IkYL5HB4QHIJJDHaE2c0L9.jpg'
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Fotter.css'


function Fotter() {
  return (
    <>

    <section className='relative text-center text-white'>
         
        <div className='z-20 opacity-80'>
             <h4 className='bg-transparent '> Have Anything in Mind</h4>
            <h2 className='text-[4rem] font-bold z-10 bg-transparent'>Stay Connected</h2>
            <div>
                <input type="text"  placeholder="Type Your Email" className=' bg-slate-500/95 rounded-s-[2.5rem] text-[1.5rem] p-3'/>
                <button className='bg-yellow-400 rounded-e-[2.5rem] text-[1.5rem] p-3 text-black'>Connect Us</button>
            </div>
            <hr  className=' w-[80%] m-auto  my-4'/>
            <div className='px-[1.5rem] m-2 flex flex-row justify-between items-center my-4'>
                    <img src={logo}  width={"75px"} alt="" />
                    <ul className='flex flex-row gap-[1.5rem] text-lg text-white '>
                        <li><a href=""><FaFacebookF /></a></li>
                        <li><a href=""><FaTwitter /></a></li>
                        <li><a href=""><CiLinkedin /></a></li>
                        <li><a href=""><FaYoutube /></a></li>
                    
                    </ul>
            </div>
        </div>
       
        
    </section>
   
   
    </>
  )
}

export default Fotter