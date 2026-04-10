
import React from "react";


const List=({data})=>{
  
    return (
        <div>
            <ol>
        {
         data.map((v,i)=>
        <li key={i}>{v.name}</li>
         )
        }
            </ol>
        </div>
    )
}

export default List;