import { Repository } from "sequelize-typescript";
import Log, { LogCreationAttributes } from "../models/Log.model";
import * as database from '../config/database';

export default class LogRepository
{
    private logRepository: Repository<Log>;

    constructor() {
        this.logRepository = database.default.getRepository(Log);
    }

    create(data: LogCreationAttributes) {
        return this.logRepository.create(data);
    }
}