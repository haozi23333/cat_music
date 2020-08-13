import axios from "axios";
import {SearchResult} from "./res_scheam/search";
import {AudioInfoResult} from "./res_scheam/audio_info";
import {RankResult} from "./res_scheam/rank";
import {MenuInfoResult} from "./res_scheam/menu_info";


/**
 * 搜索音乐
 * @param keyword   关键词
 * @param page      页码
 * @param page_size 每页返回数量
 */
export const search_audio = async (keyword = '泠鸢 yousa', page = 1, page_size = 20) => {
    return axios.get<SearchResult.RootObject>(`https://api.bilibili.com/audio/music-service-c/s`, {
        params: {
            page,
            pagesize: page_size,
            search_type: 'music',
            keyword
        }
    })
}

/**
 * 获取排行榜
 */
export const rank = async () => {
    return axios.get<RankResult.RootObject>(`https://api.bilibili.com/audio/music-service-c/menus/rank`)
}

/**
 * 获取歌曲评论信息
 * @param audio_id
 * @param start
 * @param size
 * @param type
 */
export const audio_comment = async (audio_id: number, start: number, size: number, type = 14) => {
    return axios.get<SearchResult.RootObject>(`https://api.bilibili.com/audio/music-service-c/s`, {
        params: {
            oid: audio_id,
            prev: start,
            ps: start + size,
            type
        }
    })
}


/**
 * 获取音频信息
 * @param audio_id
 */
export const audio_info = async (audio_id: number) => {
    return axios.get<AudioInfoResult.RootObject>(`https://api.bilibili.com/audio/music-service-c/songs/playing`, {
        params: {
            song_id: audio_id
        }
    })
}

/**
 * 获取歌单信息
 * @param menu_id
 */
export const menu_info = async (menu_id: number) => {
    return axios.get<MenuInfoResult.RootObject>(`https://api.bilibili.com/audio/music-service-c/menus/${menu_id}`)
}

