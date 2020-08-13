export declare module MenuInfoResult {

    export interface MenusRespones {
        menuId: number;
        title: string;
        coverUrl: string;
        intro: string;
        type: number;
        ctime: number;
        ctimeStr: string;
        playNum: number;
        collectNum: number;
        commentNum: number;
        collected: number;
        isOff: number;
        songNum: number;
        toptitle: string;
        chnTitle: string;
        chnTieup: string;
        mbnames: string;
        snum: number;
        patime: number;
        pbtime: number;
        uid: number;
        uname: string;
        menuAttr: number;
        schema: string;
        face: string;
        isDefault: number;
        collectionId: number;
    }

    export interface SongCate {
        cateId: number;
        cateInfo: string;
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

    export interface SongsList {
        id: number;
        title: string;
        mid: number;
        status: number;
        duration: number;
        ctime: any;
        mtime: any;
        authLevelP: number;
        isOrdinaryBuy: number;
        intro: string;
        cid: number;
        cr_type: number;
        cover_url: string;
        chosen_type: number;
        lyric_url?: any;
        sq_url: string;
        high_url: string;
        mid_url: string;
        low_url: string;
        creation_type_id: number;
        music_type_id: number;
        style_type_id: number;
        album_id: number;
        path: string;
        language_type_id: number;
        theme_type_id: number;
        is_locked: number;
        is_off: number;
        pass_time: any;
        song_id: number;
        is_cacheable: number;
        is_indexable: number;
        is_pgc: number;
        is_pay: number;
        is_del?: any;
        is_cooper: number;
        uploader_name: string;
        song_tags?: any;
        songCate: SongCate[];
        comment_num: number;
        play_num: number;
        coin_num?: any;
        collection_num?: any;
        author: string;
        url: string;
        avid: string;
        bvid: string;
        msid: number;
        isFromVideo: number;
        songAttr: number;
        qualities: Quality[];
        payment?: any;
        pgc_info?: any;
        region?: any;
        limit: number;
        limitdesc: string;
    }

    export interface Data {
        menusRespones: MenusRespones;
        songsList: SongsList[];
    }

    export interface RootObject {
        code: number;
        msg: string;
        data: Data;
    }

}

