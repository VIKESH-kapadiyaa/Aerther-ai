import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

const AgentOrb = ({ color = '#22d3ee', ...props }) => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.005;
        // Pulse effect
        const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05 + (hovered ? 0.2 : 0);
        meshRef.current.scale.set(scale, scale, scale);
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere
                ref={meshRef}
                args={[1, 64, 64]}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                {...props}
            >
                <MeshDistortMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={hovered}
                />
            </Sphere>
            {/* Core Glow */}
            <pointLight position={[0, 0, 0]} intensity={2} color={color} distance={3} />
        </Float>
    );
};

export const Agent3D = ({ color }) => {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <AgentOrb color={color} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};
