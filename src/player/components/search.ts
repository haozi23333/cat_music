import * as blessed from "blessed";

export default class Search {
    private container
    private inputTextarea
    private button
    private screen

    constructor(screen) {
        this.screen = screen;
        this.container =  blessed.box({
            parent: screen,
            top: '0',
            left: '30%',
            width: '70%',
            height: '8%',
            tags: true,
            mouse: true,
            border: {
                type: 'line'
            },
            label: '搜索'
        })
        this.inputTextarea = blessed.textarea({
            parent: this.container,
            tags: true,
            input: true,
            inputOnFocus: true,
            width: '85%',
            style: {
                fg: 'white',
                bg: 'white',
                focus: {
                    bg: 'red',
                    fg: 'white'
                }
            }
        })
        this.button = blessed.button({
            width: '14%',
            height: '50%',
            left: '86%',
            content: '🔍BB站音频',
            top: '24.5%'
        })
        this.container.append(this.inputTextarea)
        this.container.append(this.button)
        this.inputTextarea.setText('请输入关键字')
        this.inputTextarea.focus()
        this.addEvent()
    }

    addEvent() {
        this.inputTextarea.key(['tab'], _ =>  this.screen.focusNext());
    }
    async render() {
        return this.container;
    }
}
