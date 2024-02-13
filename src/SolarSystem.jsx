import AnimatedStars from "./Animations/AnimatedStars";
import Earth from "./components/Planets/Earth";
import Sun from "./components/Stars/Sun";
import  Jupiter  from "./components/Planets/Jupiter";
import Mercury from "./components/Planets/Mercury";
import Venus from "./components/Planets/Venus";
import Asteroid from "./components/Asteroids/Asteroid";
import Mars from "./components/Planets/Mars";
import  Neptune  from "./components/Planets/Neptune";
import  Uranus from "./components/Planets/Uranus";
import  Saturn  from "./components/Planets/Saturn";
import  Pluto  from "./components/Planets/Pluto";



export default function SolarSystem() {

    
    
    
    return(
        <>
        
            <color attach="background" args={["black"]} />            
            <AnimatedStars />
            <pointLight position={[0,0,0]} intensity={10000} color="white"/>
            <pointLight position={[200,200,200]} intensity={100000} color="white"/>
            <Sun />
            <Mercury/>
            <Venus />
            <Earth />
            <Mars />
            {/* <Asteroid /> */}           
            <Jupiter/>
            <Saturn />
            <Uranus />
            <Neptune/>
            <Pluto />
            
            
        
        </>
    )
}