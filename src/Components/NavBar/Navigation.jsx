import logo from '../../assets/img/240_F_549139018_w811opwOU8IkYL5HB4QHIJJDHaE2c0L9.jpg'

function Navigation() {
  return (
   <>
    <div className=' px-[1.5rem] m-2 flex flex-row justify-between items-center  
     sticky top-0'>
       
        <img src={logo} alt=""  width={"75px"}/>
       
         <ul className='flex flex-row gap-[2.5rem] text-lg text-white'>
                <li><a href="" className=' hover:text-yellow-400'>Home</a></li>
                <li><a href="" className=' hover:text-yellow-400'>Service</a></li>
                <li><a href="" className=' hover:text-yellow-400'>Growing State</a></li>
                <li><a href="" className=' hover:text-yellow-400'>Industry</a></li>
        </ul>
        
           
       
    </div>
   </>
  )
}

export default Navigation