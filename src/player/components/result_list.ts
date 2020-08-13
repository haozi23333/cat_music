import * as blessed from "blessed";
import {search_audio} from "../../bilibili_api/api";
import * as fs from "fs";

export default class ResultList {
    private container

    private list

    private dataList = []

    private pageSize = 20
    private page = 0
    private totalPage = 0

    constructor(screen) {
        this.container =  blessed.box({
            parent: screen,
            top: '10%',
            left: '30%',
            width: '70%',
            height: '80%',
            tags: true,
            mouse: true,
            border: {
                type: 'line'
            },
            label: '搜索结果',
            focusable: true,
            keyable: true,

        })

        this.list = blessed.listtable({
            parent: this.container,
            style: {
                selected: {
                    bg: 'yellow'
                },
                header: {
                    bg: 'white',
                },
                cell: {
                    bg: 'green'
                },
                item: {
                    bg: 'blue'
                }
            },
            tags: true,
            mouse: true,
            height: '80%',
            width: '70%',
            align: 'left',
            keyable: true,
            keys: true,
            data: [ [
                '音乐标题',
                '歌手',
                '播放量',
                '评论数',
                '最佳音质',
                '发布时间'
            ]],
            focusable: true
        })

        this.addEvent()
        this.list.focus()
    }

    async search(keyword) {
        const { data } = await search_audio(keyword);
        const res = data.data;

        this.page = res.page;
        this.totalPage = res.num_pages;


        this.dataList = [];

        res.result.forEach((audio, index) => {
            this.dataList.push({
                comment: audio.review_count,
                publish_date: new Date(audio.pubdate * 1000),
                title: audio.title.length > 20 ? audio.title.slice(0, 20) + '...' : audio.title,
                id: audio.mid,
                author: audio.author,
                up_name: audio.up_name,
                play_count: audio.play_count,
                max_quality: audio.play_url_list.map(v => parseInt(v.quality)).sort().pop(),
                audio,
                itemId: index
            })
        })

    }

    renderData() {
        this.list.clearItems();
        const data = [
            [
                '音乐标题',
                '歌手',
                '播放量',
                '评论数',
                '最佳音质',
                '发布时间'
            ]
        ];
        this.dataList.forEach((item, index) => {
            data.push([
                `>{red-fg}${item.itemId + 1}{/red-fg}.${item.title}`,
                item.author + '',
                item.play_count + '',
                item.comment + '',
                item.max_quality + 'Kbps',
                item.publish_date.toLocaleString(),
            ])
        })

        this.list.setData(data);
    }

    addEvent() {
        this.list.on('select', (_, index) => {

        })
    }

    async render() {
        await this.search('泠鸢 yousa');
        this.renderData()
        return this.container;
    }
}
