import React from 'react'


const test = () => {
    const students=[
        {name:"Mwangi", grade:"two", id:1},
        {name:"Shiru", grade:"four", id:2},
        {name:"Turu", grade:"one", id:3},
        {name:"Mose", grade:"three", id:4}
    ]


  return (
      <div>
     {
         students.map((item)=>{
           return  <div>{item.name}</div>
         })
     }
    </div>

    )
  
}



export default test