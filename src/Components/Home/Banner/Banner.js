import React from 'react';




// const bannerbg={
//     background:`url(${bg})`,
//     backgroundColor:"rgb(28, 28, 28 ,0.8)",
//     backgroundBlendMode:'darken, luminosity',
//     height:"500px"
  
//   }
const Banner = () => {
    return (
     
             <div className='mt-2'>
          
    
    <div  className="p-3">
    <div className="row">
        <div className="col-lg-6 p-5 text-center d-flex align-items-center">
        <h1 className='text-info font-monospace fw-bold'>Get free courses <br /> <span className='text-danger'>Explore skills</span></h1>
       
        </div>
        <div className="col-lg-6">
        <img className='img-fluid h-100' style={{height:"500px",borderTopLeftRadius:"80px"}} src="https://i.ibb.co/c3V0SYK/Lovely-Asian-young-lady-portriat-happy-woman-lifestyle-concept.jpg" alt='...' />

        </div>
        
    </div>
    </div>
  

</div>
        
       
    );
};

export default Banner;