import React from "react";
import './index.css';


export default function Life(props){

    /*const [Heart, setHeart] = useState(1);*/
    
    
    if(props.Heart === 1){
       
        return (
            
            <img className="btn2" src='life_1.jpeg' alt="heart"/>
         
        )
    }
    
    else if (props.Heart === 2){
        
        
        return (
            <img className="btn2" src='life_2.jpeg' alt="heart"/>
        )
    }
    
    else if (props.Heart === 3){

        return (
            <img className="btn2" src='life_3.jpeg' alt="heart"/>
        )
    }
    
    else if (props.Heart === 4){
        
        return (
            <div className="popup">
                 <img className="btn2" src='life_4.jpeg' alt="heart"/>
                 <div className="popup_title"> 
                    <p>GAME OVER</p>
                 </div>
                

            </div>
        )
    }
    

    
}