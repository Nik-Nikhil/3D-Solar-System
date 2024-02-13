import React, { useCallback, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Deimos  from "../Moons/Deimos";
import Phobos  from "../Moons/Phobos";

const  Mars = React.memo(() =>{

  const memoizedMars = useGLTF("./models/Planets/Mars.glb");

  const MarsRef = useRef();
  const MarsPositonRef = useRef(new THREE.Vector3(0,0,0));
  const clockRef =useRef(new THREE.Clock());

  const updateMarsPosition = useCallback(() => {
    // Update the position of the Mars based on the position of the sun
    const angle = clockRef.current.getElapsedTime() * 0.06
    const distance = 66
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance

    //Mars Orbiting
    MarsRef.current.position.set(x,0,z)
    MarsRef.current.rotation.y += 0.002;
  },[])

  useFrame(() => {updateMarsPosition()})
  
  return (
    <group ref={MarsRef} castShadow receiveShadow>
    <mesh  scale={0.0051}>
      <primitive object={memoizedMars.scene}  />
    </mesh>
    <Deimos />
    <Phobos />
    </group>
  );
}
)

export default Mars;

