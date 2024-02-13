import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Deimos = React.memo(()=> {

  const DeimosRef = useRef();
  const clockRef =useRef(new THREE.Clock());

  const memoizedDeimos = useMemo(() => {
    return useGLTF("./models/Moons/Mars/Deimos.glb");
  })



  const updateDeimosPosition = useCallback(() => {

  const xAxis = 1.5;

    //Axis Rotation
    DeimosRef.current.rotation.y += 0.002;

    // Orbiting
    DeimosRef.current.position.x = xAxis * Math.sin(clockRef.current.getElapsedTime() * 0.0008);
    DeimosRef.current.position.z = xAxis * Math.cos(clockRef.current.getElapsedTime() * 0.0008);
    },[])

 
  useFrame(() => {updateDeimosPosition()  
  })


  return (
    <mesh position={[3,1,1]} scale={0.0019} ref={DeimosRef} >
      <primitive object={memoizedDeimos.scene} />
    </mesh>
  );
}
)

export default Deimos;
