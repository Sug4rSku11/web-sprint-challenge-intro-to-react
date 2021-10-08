// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter= styled.div`
background-color: #d9c6a3;
opacity:70%;
display: flex;
justify-content: space-between;
margin: 2%;
.name {
    width: 30%;
    text-align: left;
    padding-left: 5%;
    &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #f7ae28;
  }
}
.birth {
    width: 30%;
    text-align: left;
    padding-left: 5%;
    &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #b0dfff;
  }
}
.gender {
    width:30%;
    text-align: left;
    padding-left: 10%;
    &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #c4ffdc;
  }
}
p {
    font-weight: bold;
    font-size: x-large;
}
`



const Character = props=> {
    
    return (
       <StyledCharacter>
            <div className='name'>
             <p>Name: {props.character.name}</p>
            </div>
            <div className='birth'>            
             <p>Birth Year: {props.character.birth_year}</p>
            </div>
            <div className='gender'>            
             <p>Gender: {props.character.gender}</p>
            </div>
            </StyledCharacter>
        
    )
}


export default Character;