import {useState} from 'react'
import CustomHeader from "./CustomHeader"
import {Home} from './Home'
import {Profile} from './Profile'

//import {Navbar} from "./Navbar"


// THIS PROTOTYPE PAGE IS MEANT TO SERVE AS THE LANDING PAGE
// ONCE JSON WEB TOKEN HAS VALIDATED USER, APP.JS WILL 
//RE RENDER INTO THIS PAGE.     


export const InnerRhythm = ()  => {


    const [currentScreen, setScreen] = useState('Home');




    const toggleScreen = (screenName) => {
        console.log(screenName)
        setScreen(screenName)
    }

    return (
        <div className ="InnerRhythm">
            <CustomHeader title = "INSIDE THE RHYTYM" subtitle= "Where will it take you?"/>

            
          
            <div className = 'Navbar'>

            {
                currentScreen === 'Home' ? <Home onScreenSwitch = {toggleScreen} /> : <Profile onScreenSwitch = {toggleScreen} />
                
            }

            </div>
        </div>    
    )    
}

// export default InnerRhythm;





// export const Navbar = () => {





//     return (

//     )
// }