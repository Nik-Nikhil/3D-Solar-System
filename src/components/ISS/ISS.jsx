import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  ISS = React.memo(()=> {

  const ISSRef = useRef();
  const clockRef =useRef(new THREE.Clock());
  
  const memoizedISS = useMemo(() => {
    return useGLTF("./models/ISS/ISS.glb");
   })

  const updateISSPosition = useCallback(() => {
    
  const xAxis = 5;


    //Axis Rotation
    ISSRef.current.rotation.y += 0.002;

    // Orbiting
    ISSRef.current.position.x = xAxis * Math.sin(clockRef.current.getElapsedTime() * 0.8);
    ISSRef.current.position.z = xAxis * Math.cos(clockRef.current.getElapsedTime() * 0.8);
    },[])

  useFrame(() => {updateISSPosition()  
  })


  return (
    <mesh position={[6,1,1]} scale={0.0020} ref={ISSRef} >
      <primitive object={memoizedISS.scene} />
    </mesh>
  );
}
)

export default ISS;
