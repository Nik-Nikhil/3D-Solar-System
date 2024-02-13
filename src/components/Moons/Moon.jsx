import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Moon = React.memo(()=> {

  const moonRef = useRef();
  const clockRef =useRef(new THREE.Clock());
  
  const memoizedMoon = useMemo(() => {
    return useGLTF("./models/Moons/Earth/Moon.glb");
   })

  const updateMoonPosition = useCallback(() => {
    
  const xAxis = 5;


    //Axis Rotation
    moonRef.current.rotation.y += 0.002;

    // Orbiting
    moonRef.current.position.x = xAxis * Math.sin(clockRef.current.getElapsedTime() * 0.8);
    moonRef.current.position.z = xAxis * Math.cos(clockRef.current.getElapsedTime() * 0.8);
    },[])

  useFrame(() => {updateMoonPosition()  
  })


  return (
    <mesh position={[6,1,1]} scale={0.0020} ref={moonRef} >
      <primitive object={memoizedMoon.scene} />
    </mesh>
  );
}
)

export default Moon;
