import {AppDataSource} from "../src/data-source";

beforeAll(async () => AppDataSource
    .initialize()
    .then((conn) => {
        console.info("Database initialized");
        return conn;
    })
    .catch(error => console.log(error)))