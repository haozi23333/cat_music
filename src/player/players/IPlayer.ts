export default abstract class IPlayer {

    /**
     * 播放
     */
    public abstract play()

    /**
     * 暂停
     */
    public abstract pause()

    /**
     * 停止
     */
    public abstract stop()

    public abstract get_volume(): number

    public abstract set_volume(volume: number)

    public abstract is_playing(): boolean

    public abstract set_looping(loop: boolean)

    public abstract is_looping(): boolean

    public abstract get_state(): string
}
