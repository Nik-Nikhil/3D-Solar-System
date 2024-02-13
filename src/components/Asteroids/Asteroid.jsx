import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Instance , Instances } from "@react-three/drei";

const  Asteroid = React.memo(() =>{

  const memoizedAsteroid = useMemo(() =>{
    return useGLTF("./models/Asteroids/1.glb"); 
  })

  const AsteroidRef = useRef();
  const AsteroidPositonRef = useRef(new THREE.Vector3(0,0,0));
  const clockRef =useRef(new THREE.Clock());

  const updateAsteroidPosition = useCallback(() => {
    // Update the position of the Asteroid based on the position of the sun
    const angle = clockRef.current.getElapsedTime() * 0.005
    const distance = 72
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance

    //Asteroid Orbiting
    AsteroidRef.current.position.set(x,0,z)
    AsteroidRef.current.rotation.y += 0.002;
  },[])

  useFrame(() => {updateAsteroidPosition()})

  const {size ,minRadius} = {size:189 , minRadius:6}
  const radiusDelta = 20
  const rotationDelta = 0.4

  
  function Asteroid(){

   

    const {x ,z ,xRotation, yRotation}= useMemo(()=>{
      const angle = Math.random() * Math.PI * 2
      const radius = minRadius + Math.random() * radiusDelta
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const xRotation = Math.random() - 0.5
     
      const yRotation = Math.random()- 0.5
      return {x,z,xRotation,yRotation}
  },[minRadius,radiusDelta])
  return <Instance position={[x,0.3,z]} rotation={[xRotation * rotationDelta,yRotation * rotationDelta,0]} />



  }


  
  return (
    <Instances castShadow>
    <group ref={AsteroidRef} castShadow receiveShadow>
    <mesh scale={0.0095}>
      <primitive object={memoizedAsteroid.scene}  />
    </mesh>
  {Array.from({length:size}).map((_,i)=>(
      <Asteroid key={i} minRadius={minRadius} />
  ))}
    </group>
  </Instances>
  );
}
)

export default Asteroid;

