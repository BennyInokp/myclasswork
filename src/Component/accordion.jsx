import  { useState } from "react"


function Accordion() {

  const [active, setActive] = useState (null)

  const toggle = (i) =>{
    if (active ===i) {
      return setActive(null)
    }
    setActive(i)
  }
  
  return (
    <div className='wrapper'>
    <div className='accordion'>

     {data.map((item, i) => (
      <div className='item'>
        <div className='title' onClick={() => toggle(i)}>
          <h2>{item.Question}</h2>
          <span>{active ===i? '-': '+'}</span>
          </div>
          <div className={active === i? 'content show': 'content'}>{item.Answer}</div>
          </div>
       ))}

    </div>
    
    </div>
  );
}


const data =[ 
  {
    Question: 'Question 1',
    Answer: 
    'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' 
   },
  {
    Question: 'Question 1',
    Answer: 
    'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
   },
  {
    Question: 'Question 1',
    Answer: 
    'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
   },
  
]



export default Accordion;
  

