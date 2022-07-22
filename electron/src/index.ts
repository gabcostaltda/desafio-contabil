import {AppDataSource} from "./data-source"

const initializeApplication = () => {
    AppDataSource
        .initialize()
        .then(async (dataSource) => {

            await dataSource.runMigrations()
            console.info(":::: Migrations executed ::::")

        }).catch(error => console.error(error))
}

export default initializeApplication
