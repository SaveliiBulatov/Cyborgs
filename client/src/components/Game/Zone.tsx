import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useState } from 'react';
import { Vector3 } from "three";

interface IZoneProps {
    position: Vector3;
}

interface IZoneState {
    blueTime: number;
    blueAmount: number;
    orangeTime: number;
    orangeAmount: number;
    score: number;
    team: number;
}

function Zone({ position }: IZoneProps) {
    const [time, setTime] = useState<number>(0);
    const [zoneState, setZoneState] = useState<IZoneState>(
        {
            blueTime: 0,
            blueAmount: 0,
            orangeTime: 0,
            orangeAmount: 0,
            score: 0,
            team: 0
        }
    );

    return (
        <RigidBody
            userData={{
                type: "Zone"
            }}>
                
            <group position={position}>
                <CuboidCollider
                    args={[1, 1, 0.5]}
                    sensor
                    onIntersectionEnter={(e) => {
                        const data: any = e.other.rigidBody?.userData;
                        if (data.type === "player") {
                            setTime(Date.now())
                        }
                    }}
                    onIntersectionExit={(e) => {
                        const data: any = e.other.rigidBody?.userData;
                        if (data.type === "player") {
                            const left = Date.now()
                            const score = Math.floor((left - time) / 1000)
                            console.log(score)
                        }
                    }} />
            </group>
        </RigidBody>
    )
}

export default Zone;