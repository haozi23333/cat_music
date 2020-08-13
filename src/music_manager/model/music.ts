import {Table, Column, Model, DataType, Default, PrimaryKey, AutoIncrement} from 'sequelize-typescript';


@Table
class Music extends Model<Music>{

    @Column
    source!: string

    @Default(Date.now)
    @Column
    create_date: Date

    @Default(Date.now)
    @Column
    update_date: Date

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @Column
    title: string

    @Column
    duration: number

    @Column
    tags: string[]

    @Column
    local_file: string

    @Column
    local_file_quality: number

    @Column
    media_id: string

    @Column
    author: string

    @Column(DataType.TEXT)
    lyric_data: string

    @Column
    cover_url: string

    @Column
    up_user: string

}
