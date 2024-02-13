import { OrbitControls } from "@react-three/drei";
import SolarSystem from "./SolarSystem";
import { Canvas } from "@react-three/fiber";
import space from "../src/assets/Space.mp3"
import { useRef, useEffect, useState } from "react";
import soundoff from '../src/assets/soundoff.png'
import soundon from '../src/assets/soundon.png'




export default function App() {
  
  const audioRef = useRef(new Audio(space))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true
  const [ isPlayingMusic , setIsPlayingMusic] = useState(false)



  useEffect(() => {
    if(isPlayingMusic){
      audioRef.current.play()
    }
    return ()=>{
      audioRef.current.pause()
    }
  },[isPlayingMusic])

  return (
    <><Canvas
      camera={{ fov: 800, near: 0.1, far: 10000, position: [-150, 150, 150] }}
      shadows

    >

      <SolarSystem />
      <OrbitControls minDistance={50} maxDistance={200} makeDefault />

    </Canvas><div className="absolute bottom-2 left-2">
        <img src={!isPlayingMusic ? soundoff : soundon} alt="sound" className="w-10 h-10 cursor-pointer object-contain" onClick={() => setIsPlayingMusic(!isPlayingMusic)} />
      </div></>

    
    
  )
   
}