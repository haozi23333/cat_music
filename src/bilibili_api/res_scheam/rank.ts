export declare module RankResult {

    export interface Audio {
        id: number;
        title: string;
        author: string;
    }

    export interface Datum {
        menuId: number;
        title: string;
        coverUrl: string;
        intro: string;
        type: number;
        audios: Audio[];
    }

    export interface RootObject {
        code: number;
        msg: string;
        data: Datum[];
    }

}

