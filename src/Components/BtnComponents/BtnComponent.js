import React from 'react'


function BtnComponent(props) {

   
    function handleClick(e){
        if(props.value==="All"){
            props.All()
        }
        else if(props.value==="Cupcakes"){
            props.cupcake()
        }
        else if(props.value==="Sweets"){
            props.sweet()

        }
        else if(props.value==="Donuts"){
            props.donut()

        }
        else{
            props.cake()
        }
        
    }
  
    
    
    return (
        <>
            <button className="items" onClick={handleClick} >{props.value}</button>
            
        </>
    )
}

export default BtnComponent
