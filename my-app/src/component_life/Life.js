import React from "react";
import './index.css';

export default function Life(props){
  
    if(props.Heart == 1){
        return (
            <div className="btn2">
                <img src='C:\Users\dilob\Desktop\4_semestre\tecweb\p3\imagens\life_1.jpeg'/>
            </div>
        )
    }
    
    else if (props.Heart == 2){
        return (
            <div className="btn2">
                <img src='C:\Users\dilob\Desktop\4_semestre\tecweb\p3\imagens\life_2.jpeg'/>
            </div>
        )
    }
    
    else if (props.Heart == 3){
        return (
            <div className="btn2">
                <img src='C:\Users\dilob\Desktop\4_semestre\tecweb\p3\imagens\life_3.jpeg'/>
            </div>
        )
    }
    
    else if (props.Heart == 4){
        return (
            <div className="popup">
                <img src='C:\Users\dilob\Desktop\4_semestre\tecweb\p3\imagens\life_4.jpeg'/>
                <p>You Sucks</p>
            </div>
        )
    }
    

    
}