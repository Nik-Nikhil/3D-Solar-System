import React, { useCallback, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const  Phobos = React.memo(()=> {

  const PhobosRef = useRef();
  const clockRef =useRef(new THREE.Clock());


  const updatePhobosPosition = useCallback(() => {

  const xAxis = 1.9;

    //Axis Rotation
    PhobosRef.current.rotation.y += 0.002;

    // Orbiting
    PhobosRef.current.position.x = xAxis * Math.sin(clockRef.current.getElapsedTime() * 0.0008);
    PhobosRef.current.position.z = xAxis * Math.cos(clockRef.current.getElapsedTime() * 0.0008);
    },[])

  const memoizedPhobos = useMemo(() => {
    return useGLTF("./models/Moons/Mars/Phobos.glb");
  })

  useFrame(() => {updatePhobosPosition()  
  })


  return (
    <mesh position={[3,1,1]} scale={0.002} ref={PhobosRef}>
      <primitive object={memoizedPhobos.scene} />
    </mesh>
  );
}
)

export default Phobos;
