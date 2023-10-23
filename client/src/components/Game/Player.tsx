import MakeSprite from "./MakeSprite";
import { SADTROLLFACE, TROLLFACE, HPBack } from "../../assets/images";
import { TextureLoader } from "three";
import { Mesh, Vector3, Sprite, SpriteMaterial } from "three";
import { useRef, useState } from "react";

export interface IPlayerProps {
    id?: number;
    username?: string;
    hp?: number;
    isAlive?: true | false;
    position?: Vector3;
}

const Player = (props: IPlayerProps) => {
    const playerRef = useRef<Mesh>(null!);
    const healthbarRef = useRef<Sprite>(null!);

    const [isAlive, setIsAlive] = useState<boolean>(props.isAlive ? true : false);
    const [hp, setHp] = useState<number>(100);

    const textureLoader = new TextureLoader();
    const TTROLLFACE = textureLoader.load(TROLLFACE);
    const TSADTROLLFACE = textureLoader.load(SADTROLLFACE);

    // потом что-нибудь придумаем
    const takeDamage = (damage: number) => {
        setHp(hp - damage < 0 ? 0 : hp - damage);
        if (hp <= 0) {
            setIsAlive(false);
        }
    }

    return (
        <mesh ref={playerRef} scale={0.5} position={props.position}>
            <group position={new Vector3(0, 1, 0.1)} scale={new Vector3(1, 0.25, 0)}>
                <sprite material={new SpriteMaterial({ color: 0xff0000 })} ref={healthbarRef} />
            </group>

            <MakeSprite texture={isAlive ? TTROLLFACE : TSADTROLLFACE} position={new Vector3(0, 0, 0.1)} isCollider={isAlive} />

        </mesh>
    );
}

export default Player;