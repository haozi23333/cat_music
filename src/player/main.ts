import * as blessed from 'blessed'
import RankForm from './components/rank_form'
import Search from "./components/search";
import {list} from "blessed";
import ResultList from "./components/result_list";
import MusicControl from "./components/music_control";

(async ()=> {
    const screen = blessed.screen({
        smartCSR: true,
        fullUnicode: true,
        sendFocus: true,
        title: 'bilibili 音频'
    })

    const rank = new RankForm();
    screen.append(await rank.render());
    const musicControl = new MusicControl(screen);
    screen.append(await musicControl.render());
    const search = new Search(screen);
    screen.append(await search.render());
    const result = new ResultList(screen);
    screen.append(await result.render());

    screen.key(['C-c'], function(ch, key) {
        return process.exit(0);
    });

    screen.key(['tab'], _ => screen.focusNext())
    screen.render();
})()
