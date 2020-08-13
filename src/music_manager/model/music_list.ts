import {Table, Column, Model, DataType, Default, PrimaryKey, AutoIncrement} from 'sequelize-typescript';


@Table
class Music extends Model<Music>{

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @Column
    music_list_id: number

    @Column
    music_id: number

    @Default(Date.now)
    @Column(DataType.DATE)
    create_at: Date

    @Default(Date.now)
    @Column(DataType.DATE)
    update_at: Date
}
