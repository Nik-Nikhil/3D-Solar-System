import React, { useCallback, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Moon  from "../Moons/Moon";
import  ISS from "../ISS/ISS";

const  Earth = React.memo(() =>{

  const memoizedEarth = useGLTF("./models/Planets/Earth.glb");

  const earthRef = useRef();
  const earthPositonRef = useRef(new THREE.Vector3(0,0,0)); 
  const clockRef =useRef(new THREE.Clock());

  const updateEarthPosition = useCallback(() => {
    // Update the position of the earth based on the position of the sun
    const angle = clockRef.current.getElapsedTime() * 0.07
    const distance = 54
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance

    //Earth Orbiting
    earthRef.current.position.set(x,0,z)
    earthRef.current.rotation.y += 0.0005;
  },[])

  useFrame(() => {updateEarthPosition()})
  
  return (
    <group ref={earthRef} castShadow receiveShadow>
    <mesh  scale={0.0056 }>
      <primitive object={memoizedEarth.scene}  />
    </mesh>
    <Moon />
    <ISS/>
    </group>
  );
}
)

export default Earth;

