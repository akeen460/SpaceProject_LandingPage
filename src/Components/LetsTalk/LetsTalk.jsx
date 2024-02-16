import img5 from '../../assets/img/240_F_549139018_w811opwOU8IkYL5HB4QHIJJDHaE2c0L9.jpg'

function LetsTalk() {
  return (
   <>
     <div className="px-[1.8rem] relative mt-10">
      
        <div className="grid grid-cols-2 ">
            <div></div>
            <div className='z-20 '>
                <h2 className="text-white uppercase text-[3rem] font-bold  bg-transparent">Lets Talk  <br /> About How <br /> we Can help you</h2>
            </div>
        </div>
        <div className="grid grid-cols-3 ">
             <div></div>
            <div></div>
            <div className="p-[1.8rem]">
               <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat laudantium officiis rem delectus nostrum unde ipsa, sint pariatur inventore quas quos autem, nihil, architecto excepturi eaque? Pariatur voluptatem necessitatibus voluptatibus.</p>
                <button className='px-5 py-3 mt-4 text-black bg-yellow-400 rounded-xl'>Describe More</button>
            </div>
          
        </div>
            <img src={img5} alt="" width={"550px"} className='absolute top-8 left-[10rem] z-10 bg-transparent'/>  
     </div>
     
   
   </>
  )
}

export default LetsTalk