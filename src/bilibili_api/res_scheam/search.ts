
import axios from 'axios';

export declare module SearchResult {

    export interface PlayUrlList {
        quality: string;
        url: string;
    }

    export interface Result {
        review_count: number;
        pubdate: number;
        title: string;
        cover: string;
        mid: number;
        play_count: number;
        putdate?: any;
        type: string;
        id: number;
        sq_url: string;
        high_url: string;
        mid_url: string;
        low_url: string;
        writer: string;
        play_url_list: PlayUrlList[];
        up_name: string;
        author: string;
        song_attr: number;
        limit: number;
        limitdesc: string;
        pgc_info?: any;
    }

    export interface Data {
        code: string;
        seid: string;
        page: number;
        pagesize: number;
        msg: string;
        result: Result[];
        easy?: any;
        num_pages: number;
    }

    export interface RootObject {
        code: number;
        msg: string;
        data: Data;
    }

}
