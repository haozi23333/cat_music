import * as blessed from "blessed";
// import EarsPlayer from "../players/ears_player";

export default class MusicControl{
    private screen
    private container
    private prevButton
    private nextButton
    private playButton
    private musicTitle
    private musicProgressBar
    // private player = new EarsPlayer('/Users/haozi/cat/cat_music/hanser_1.flac');

    constructor(screen) {
        this.screen = screen
        this.container = blessed.box({
            parent: screen,
            autoCommandKeys: true,
            bottom: 0,
            width: '100%',
            height: '8%',
            tags: true,
            border: {
                type: "line"
            },
        } as any);

        this.addPrevButton()
        this.addPlayButton()
        this.addNextButton()
        this.addMusicTitle()
        this.addMusicProgressBar()
    }

    addPrevButton() {
        this.prevButton = blessed.box({
            left: 5,
            content: '⏮'
        })

        this.container.append(this.prevButton)
    }

    addPlayButton() {
        this.playButton = blessed.box({
            left: 10,
            content: '⏯'
        })
        // this.playButton.on('click', () => {
        //     if (this.player.is_playing()) {
        //         this.player.pause()
        //     } else {
        //         this.player.play()
        //     }
        // })
        this.container.append(this.playButton)
    }

    addNextButton() {
        this.nextButton = blessed.box({
            left: 15,
            content: '⏭'
        })
        this.container.append(this.nextButton)
    }

    addMusicTitle() {
        this.musicTitle = blessed.box({
            left: 20,
            content: '{red-fg}(当前未播放){/red-fg}',
            clickable: true,
            tags: true
        })
        this.container.append(this.musicTitle)
    }

    addMusicProgressBar() {
        this.musicProgressBar = blessed.progressbar({
            left: 40,
            width: "70%",
            tags: true,
            pch: '*',
            orientation: 'horizontal',
            value: 30,
            filled: 30,
            keys: true
        } as any)
        this.container.append(this.musicProgressBar)
    }

    async render() {
        return this.container
    }
}
