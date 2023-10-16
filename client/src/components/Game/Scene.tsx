import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import Map from "./Map";

const Scene = () => {
    const sceneRef = useRef<Mesh>(null!);
    const scale = 1;

    return (
        <group>
            <mesh ref={sceneRef} position={[-5, 0, -2.5]} rotation={[Math.PI / 2, 0, 0]}>
                <Map scale={scale} />
            </mesh>
        </group>
    );
}

export default Scene;