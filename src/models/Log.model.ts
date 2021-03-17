import { Table, Model, Column, CreatedAt, UpdatedAt } from "sequelize-typescript"
import { Optional } from "sequelize/types"
import LogEntity from "../dto/Log"


export interface LogCreationAttributes extends Optional<LogEntity, 'id'> {}

@Table({
    tableName: 'logs'
})
export default class Log extends Model<LogEntity, LogCreationAttributes> {
    @Column
    endpoint?: string;

    @CreatedAt
    created_at?: Date;

    @UpdatedAt
    updated_at?: Date;

    @Column({allowNull: true})
    query_param?:string
}
