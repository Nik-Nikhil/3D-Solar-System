import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Uranus = React.memo(()=> {

  const UranusRef = useRef();
  const clockRef =useRef(new THREE.Clock());

  const memoizedUranus = useMemo(() => {
    return useGLTF("./models/Planets/Uranus.glb");
  })


  const updateUranusPosition = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.03
    const distance = 130
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance    



    //Axis Rotation
    UranusRef.current.rotation.y += 0.002;

    // Orbiting
    UranusRef.current.position.set(x,0,z)



    },[])

  

  useFrame(() => {updateUranusPosition()  
  })


  return (
    <mesh position={[3,1,1]} scale={0.008} ref={UranusRef}>
      <primitive object={memoizedUranus.scene} />
    </mesh>
  );
}
)

export default Uranus;
