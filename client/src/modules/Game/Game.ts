import { Vector2, Vector3 } from "three";
import { TBullet, TDestructible, TPlayer } from "../Server/types";
import Server from "../Server/Server";
import { Store } from "../Store/Store";


interface IGame {
    bullets: TBullet[];
    objects: TDestructible[];
    players: TPlayer[];
    dummies: TPlayer[];

    // myPlayer: TPlayer;
    myBullets: TBullet[];

    cameraPosition: Vector3;
    mousePostion: Vector2;

    server: Server;
    store: Store;

    timestamp: number;
}

class Game implements IGame {

    bullets: TBullet[];
    objects: TDestructible[];
    players: TPlayer[];
    dummies: TPlayer[];

    // myPlayer: TPlayer;
    myBullets: TBullet[];

    cameraPosition: Vector3;
    mousePostion: Vector2;

    server: Server;
    store: Store;

    timestamp: number;

    constructor(server: Server, store: Store) {
        this.server = server;
        this.store = store;

        this.bullets = [];
        this.players = [];
        this.objects = [];
        this.dummies = [];

        this.timestamp = 0;

        this.cameraPosition = new Vector3();
        this.mousePostion = new Vector2();

        // получение данных о сцене, в т.ч. начальных данных об игроке

        this.getScene();

        const player = this.players.find(player => player.token === this.store.getUser().token); // здесь всегда должен найтись игрок, если ничего нету, то бэкендеры - долбоны
        // this.myPlayer = player ?? {
        //     x: 0,
        //     y: 0,
        //     vx: 0,
        //     vy: 0,
        //     dx: 0,
        //     dy: 0,
        //     hp: 100,
        //     teamId: null,
        //     token: 'no token'
        // };
        this.myBullets = [];

        this.loop();
    }

    async getScene() {
        const result = await this.server.getScene();
        if (result?.bullets) {
            this.bullets = result.bullets;
        }
        if (result?.objects) {
            this.objects = result.objects;
        }
        if (result?.players) {
            this.players = result.players;
        }
    }

    async setPlayer(player: TPlayer) {
        await this.server.setPlayer(player.x, player.y, player.vx, player.vy, 0, 0);
    }

    setBullet(bullet: TBullet) {
        this.server.setBullet(bullet.x, bullet.y, bullet.vx, bullet.vy);
    }

    loop() {
        let intervalID = setInterval(() => {
            this.getScene();
            if (this.players) {
                this.players.forEach((player) => {
                    this.setPlayer(player);
                })
            }
        }, 1000)

        console.log(intervalID)
        
        return () => {
            clearInterval(intervalID);
        }
        // return this.intervalID
        // return () => {
        //     clearInterval(interval);
        // }
    }

    updateScene() {
        
    }
}

export default Game;