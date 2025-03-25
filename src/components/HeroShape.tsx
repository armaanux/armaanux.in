import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'


const Myshape = () => {
    const ref: any = useRef(0);
    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.2;
        ref.current.rotation.x += delta * 0.2;
        state
    })
    return (
        <mesh position={[0, 0, 0]} ref={ref}>
            <icosahedronGeometry args={[3]} />
            <meshStandardMaterial color={"#0f0f0f"} metalness={3} roughness={0.4} />
        </mesh>
    )
}



const HeroShape = () => {
    return (
        <Canvas gl={{ alpha: true }}
            style={{ backgroundColor: 'transparent', height: '300px', width: "400px" }}>
            <directionalLight position={[-2, 0, 1]} intensity={10} />
            <directionalLight  position={[0, 0, 1]} intensity={5}/>
            <Myshape />
        </Canvas>

    )
}

export default HeroShape;


