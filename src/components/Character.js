// Write your Character component here
import React, {useState, useEffect} from 'react';





const Character = props=> {
    
    return (
       
            <div className='character-container'>
             <p>{props.character.name}</p>
             <p>{props.character.birth_year}</p>
            </div>
        
    )
}


export default Character;