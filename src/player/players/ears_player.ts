import IPlayer from "./IPlayer";
const ears = require('../../../player_lib')

export default class EarsPlayer extends IPlayer {

    private player;

    constructor(path: string) {
        super()
        this.player = new ears.MusicPlayer(path);
    }

    get_state(): string {
        return this.player.get_state();
    }

    get_volume(): number {
        return this.player.get_volume();
    }

    is_looping(): boolean {
        return this.player.is_looping();
    }

    is_playing(): boolean {
        return this.player.is_playing();
    }

    pause() {
        return this.player.pause();
    }

    play() {
        return this.player.play();
    }

    set_looping(loop: boolean) {
        return this.player.set_looping(loop);
    }

    set_volume(volume: number) {
        return this.player.set_volume(volume);
    }

    stop() {
        return this.player.stop();
    }

}
