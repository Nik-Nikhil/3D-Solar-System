import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Pluto = React.memo(()=> {

  const PlutoRef = useRef();
  const clockRef =useRef(new THREE.Clock());

  const memoizedPluto = useMemo(() => {
    return useGLTF("./models/Planets/Pluto.glb");
  })


  const updatePlutoPosition = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.01
    const distance = 160
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance    



    //Axis Rotation
    PlutoRef.current.rotation.y += 0.002;

    // Orbiting
    PlutoRef.current.position.set(x,0,z)



    },[])

  

  useFrame(() => {updatePlutoPosition()  
  })


  return (
    <mesh position={[3,1,1]} scale={0.003} ref={PlutoRef}>
      <primitive object={memoizedPluto.scene} />    

    </mesh>
  );
}
)

export default Pluto;
