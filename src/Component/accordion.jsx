import React, { useState } from 'react';


 function Accordion() {
   const [isActive, setIsActive] = useState();

   const toggle = (active) => {
      if (isActive === active) {
         return setIsActive()
      }
      setIsActive(active)
   };

   const items=[

       {
      title: "Question 1",
      content: "how to use the internet",
   },

   {
      title: " Question2",
      content: "how to use the internet",
   },

   {
      title: "Question 3",
      answer: "how to use the internet",
   },


    ]

  
   return (
   
      <div className='wrapper'>
         <div className='accordion'> 
         <h2>FQAs</h2>
         {items.map((item, active) => (
            <div className='item'>
               <div className='title' onClick={() => toggle(active)}>
               <span>{isActive === active? '-' : '+'}</span>
               <h2>item.title</h2>
               <div className={'isActive'===active? 'content show': 'content'}>{item.answer}</div>
            </div>
            </div>
         ))}
         </div>
      </div>
   );
}
    
 export default  Accordion  
    

  

