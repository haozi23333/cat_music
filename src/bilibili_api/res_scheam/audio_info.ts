export declare module AudioInfoResult {

    export interface RelationData {
        key: string;
        title: string;
        cover: any[];
        ttl: number;
    }

    export interface Video {
        aid: number;
        title: string;
        ptitle: string;
        pic: string;
        duration: number;
        view: number;
        reply: number;
        page: number;
        song?: any;
    }

    export interface Quality {
        type: number;
        desc: string;
        size: number;
        bps: string;
        tag: string;
        require: number;
        requiredesc: string;
    }

    export interface UpHitAudio {
        id: number;
        title: string;
        cover: string;
        duration: number;
        uid: number;
        uname: string;
        author: string;
        play_num: number;
        reply_num: number;
        ctime: number;
        ctime_fmt: string;
        avid: string;
        page: number;
        is_off: number;
        schema: string;
        song_attr: number;
        qualities: Quality[];
        payment?: any;
        limit: number;
        limitdesc: string;
    }

    export interface Quality2 {
        type: number;
        desc: string;
        size: number;
        bps: string;
        tag: string;
        require: number;
        requiredesc: string;
    }

    export interface Data {
        id: number;
        title: string;
        duration: number;
        mid: number;
        cover_url: string;
        lyric_url: string;
        intro: string;
        album_id: number;
        ctime: number;
        ctime_str: string;
        up_name: string;
        up_mid: number;
        up_img: string;
        fans: number;
        up_cert_type: number;
        up_cert_info: string;
        up_is_follow: number;
        is_collect: number;
        is_off: number;
        author: string;
        isFromVideo: number;
        songAttr: number;
        relationData: RelationData;
        menusRespones: any[];
        is_cacheable: boolean;
        avid: string;
        bvid: string;
        snum: number;
        reply_count: number;
        play_count: number;
        collect_count: number;
        coin_num: number;
        videos: Video[];
        up_hit_audios: UpHitAudio[];
        qualities: Quality2[];
        pgc_info?: any;
        region?: any;
        limit: number;
        limitdesc: string;
        coinceiling: number;
        memberList: any[];
        activities: any[];
    }

    export interface RootObject {
        code: number;
        msg: string;
        data: Data;
    }

}

