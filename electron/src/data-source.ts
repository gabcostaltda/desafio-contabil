import "reflect-metadata"
import {DataSource} from "typeorm"
import {getConfig} from "./datasource.config";

export const AppDataSource: DataSource = new DataSource(getConfig())
