import {AppDataSource} from "../src/data-source";

beforeAll(async () => AppDataSource
    .initialize()
    .then((conn) => {
        return conn;
    })
    .catch(error => console.error(error)))
