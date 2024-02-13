import React, { useCallback, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Venus = React.memo(() =>{

  const memoizedVenus = useGLTF("./models/Planets/Venus.glb");

  const VenusRef = useRef();
  const VenusPositonRef = useRef(new THREE.Vector3(0,0,0));
  const clockRef =useRef(new THREE.Clock());

  const updateVenusPosition = useCallback(() => {
    // Update the position of the Venus based on the position of the sun
    const angle = clockRef.current.getElapsedTime() * 0.12
    const distance = 44
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance

    //Venus Orbiting
    VenusRef.current.position.set(x,0,z)
    VenusRef.current.rotation.y += 0.004;
  },[])

  useFrame(() => {updateVenusPosition()})
  
  return (
    
    <mesh castShadow receiveShadow scale={0.0050} ref={VenusRef}>
      <primitive object={memoizedVenus.scene}  />
    </mesh>
    
   
  );
}
)

export default Venus;

