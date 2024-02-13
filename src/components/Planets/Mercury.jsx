import React, { useCallback, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Mercury = React.memo(() =>{

  const memoizedMercury = useGLTF("./models/Planets/Mercury.glb");

  const MercuryRef = useRef();
  const MercuryPositonRef = useRef(new THREE.Vector3(0,0,0));
  const clockRef =useRef(new THREE.Clock());

  const updateMercuryPosition = useCallback(() => {
    // Update the position of the Mercury based on the position of the sun
    const angle = clockRef.current.getElapsedTime() * 0.15
    const distance = 36
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance

    //Mercury Orbiting
    MercuryRef.current.position.set(x,0,z)
    MercuryRef.current.rotation.y += 0.004;
  },[])

  useFrame(() => {updateMercuryPosition()})
  
  return (
    
    <mesh  scale={0.00302} ref={MercuryRef}>
      <primitive object={memoizedMercury.scene}  />
    </mesh>
    
  );
}
)

export default Mercury;

