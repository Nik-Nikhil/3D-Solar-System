import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Neptune = React.memo(()=> {

  const NeptuneRef = useRef();
  const clockRef =useRef(new THREE.Clock());

  const memoizedNeptune = useMemo(() => {
    return useGLTF("./models/Planets/Neptune.glb");
  })


  const updateNeptunePosition = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.02
    const distance = 148
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance    



    //Axis Rotation
    NeptuneRef.current.rotation.y += 0.002;

    // Orbiting
    NeptuneRef.current.position.set(x,0,z)



    },[])

  

  useFrame(() => {updateNeptunePosition()  
  })


  return (
    <mesh position={[3,1,1]} scale={0.009} ref={NeptuneRef}>
      <primitive object={memoizedNeptune.scene} />
    </mesh>
  );
}
)

export default Neptune;
