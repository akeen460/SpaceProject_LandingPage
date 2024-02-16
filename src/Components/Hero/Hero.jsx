import './Hero.css'

function Hero() {
  return (
   <>
   <div className='px-[1.8rem]'>
     <div className="mainDiv">
         <h1 className='text-white text-[4rem] bg-transparent font-bold mt-4' >YOUR <span className='text-yellow-400 bg-transparent'> DREAMS <br /> </span>DESERVE TO <br />BE BUILD</h1>
         <div className=' float-right'>
            <p className='text-white bg-transparent mb-3 '>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Deleniti, odit porro itaque eveniet <br/>minima ipsam saepe corporis. </p>
            <button className=' bg-yellow-400 text-black px-5 py-3 rounded-xl'>Learn More</button>
    </div>
    </div>
    

   </div>
    
   </>
  )
}

export default Hero