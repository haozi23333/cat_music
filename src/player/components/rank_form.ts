import * as blessed from "blessed";
import {menu_info, rank} from "../../bilibili_api/api";
import { writeFileSync } from 'fs'
import {box, list} from "blessed";
import * as fs from "fs";

interface layer {
    data: layerData[],
    selectIndex: number,
}

interface layerData {
    type: string,
    id: number,
    title: string,
    hoverText: string,
    itemId?: number
}

export default class  {
    private container = blessed.box({
        width: '30%',
        height: '90%',
        tags: true,
        mouse: true,
        border: {
            type: 'line'
        },
        label: '榜单',
        focusable: true
    })

    private list =  blessed.list({
        style: {
            selected: {
                bg: 'yellow'
            }
        },
        tags: true,
        keyable: true,
        mouse: true,
        height: '100%',
        hoverText: 'Emmmmmm',
        keys: true,
        focusable: true,
    })

    private mode: string = 'rank'

    private dataList: layerData[] = []

    private layerList: layer[] = []

    constructor() {
        this.container.append(this.list);
        this.addEvent()
        this.list.focus()
    }

    async getRank() {
        this.getNewLayer()
        const { data } = await rank();
        this.list.clearItems()
        this.dataList = []
        data.data.map((menu) => {
            this.dataList.push({
                type: 'menu',
                id: menu.menuId,
                title: menu.title,
                hoverText: menu.intro
            })
            menu.audios.map((v, i) => {
                this.dataList.push({
                    type: 'audio',
                    title: v.title,
                    hoverText: v.author,
                    id: v.id,
                    itemId: i
                })
            })
        })
        this.renderList()
    }

    async getMenu(menu_id) {
        this.getNewLayer()
        this.mode = 'rank'
        const { data } = await menu_info(menu_id);
        data.data.menusRespones
        this.container.setLabel(`榜单-${data.data.menusRespones.title}`)
        this.list.clearItems()
        this.dataList = [];
        data.data.songsList.map((song, i) => {
            this.dataList.push({
                type: 'audio',
                id: song.id,
                title: song.title,
                hoverText: song.intro,
                itemId: i
            })
        })
        this.renderList()
    }

    addEvent() {
        this.list.on('select', (_, index, old) => {
            const item = this.dataList[index];
            fs.writeFileSync('./log.log', JSON.stringify(item) + '\n' + index + '' + old, { flag: 'a' })
            if (item.type === 'menu') {
                this.getMenu(item.id);
            }
            if (item.type === 'audio') {
            }
        })

        this.list.key(['escape', 'q'], (ch, key) => {
            this.back()
        });
    }

    getNewLayer() {
        this.layerList.push({
            data: this.dataList,
            selectIndex: 2
        });
        this.dataList = []
    }

    back() {
        if (this.layerList.length === 1) {
            return
        }
        const layer = this.layerList[this.layerList.length - 1]
        this.dataList = layer.data;
        this.layerList.pop()
        this.renderList()
    }

    renderList() {
        this.list.clearItems();
        this.dataList.map((item) => {
            if (item.type === 'menu') {
                this.list.addItem(`{red-fg}${item.title}{/red-fg}`)
            }
            if (item.type === 'audio') {
                this.list.addItem(`>{red-fg}${item.itemId + 1}{/red-fg}.${item.title}`)
            }
        })
    }

    async render() {
        await this.getRank()
        return this.container;
    }
}
