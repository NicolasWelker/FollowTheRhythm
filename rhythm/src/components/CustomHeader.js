import React from 'react'; 
import '../styles/customHeader.scss'

function CustomHeader({title, subtitle}) { 
    return ( 
        <div> 
            <h1 className='display-3'>{title}</h1>  
            <p className='lead'>{subtitle}</p> 
        </div> 
    ); 
} 
 
export default CustomHeader;