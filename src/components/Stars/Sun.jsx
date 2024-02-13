import React, { useMemo ,useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sun = React.memo(() => {

  const sunRef = useRef();

  const memoziedSun = useMemo(() => {
    return useGLTF("./models/Stars/Sun.glb");
  })

  useFrame(({ clock }) => {

    // Axis Rotation
    sunRef.current.rotation.y += 0.004
    
    
  });

  return (
   <mesh>
    <primitive object={memoziedSun.scene} position={[0,0,0]} scale={0.048} ref={sunRef}/>
    <pointLight intensity={5000} color={"white"}/>

   </mesh>
  );
}
)

export default Sun;
