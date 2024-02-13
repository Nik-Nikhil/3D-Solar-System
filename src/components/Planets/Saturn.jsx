import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Saturn = React.memo(()=> {

  const SaturnRef = useRef();
  const clockRef =useRef(new THREE.Clock());

  const memoizedSaturn = useMemo(() => {
    return useGLTF("./models/Planets/Saturn.glb");
  })


  const updateSaturnPosition = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.04
    const distance = 115
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance    



    //Axis Rotation
    SaturnRef.current.rotation.y += 0.002;

    // Orbiting
    SaturnRef.current.position.set(x,0,z)



    },[])

  

  useFrame(() => {updateSaturnPosition()  
  })


  return (
    <mesh position={[3,1,1]} scale={0.007} ref={SaturnRef}>
      <primitive object={memoizedSaturn.scene} />
    </mesh>
  );
}
)

export default Saturn;
