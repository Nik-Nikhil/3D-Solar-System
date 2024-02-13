import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Jupiter = React.memo(()=> {

  const jupiterRef = useRef();
  const clockRef =useRef(new THREE.Clock());

  const memoizedJupiter = useMemo(() => {
    return useGLTF("./models/Planets/Jupiter.glb");
  })


  const updateJupiterPosition = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.05
    const distance = 96
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance    



    //Axis Rotation
    jupiterRef.current.rotation.y += 0.002;

    // Orbiting
    jupiterRef.current.position.set(x,0,z)



    },[])

  

  useFrame(() => {updateJupiterPosition()  
  })


  return (
    <mesh position={[3,1,1]} scale={0.012} ref={jupiterRef}>
      <primitive object={memoizedJupiter.scene} />

    </mesh>
  );
}
)

export default Jupiter;
