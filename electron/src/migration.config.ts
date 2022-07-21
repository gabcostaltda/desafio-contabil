import {DataSource} from "typeorm";
import {getConfig} from "./datasource.config";


const dataSource = new DataSource(getConfig())

dataSource.initialize().then(r => {
    console.log("Database initialized")
}).catch(e => console.error(e))

export default dataSource;