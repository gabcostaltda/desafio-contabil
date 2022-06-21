const {Umzug, SequelizeStorage} = require("umzug")
const {sequelize, Sequelize} = require("./core/models")

const umzug = new Umzug({
    migrations: {
        glob: `${__dirname}/database/migrations/*.js`,
        resolve: ({name, path, context}) => {
            const migration = require(path)

            return {
                name,
                up: async () => migration.up(context, Sequelize),
                down: async () => migration.down(context, Sequelize)
            }
        }
    },
    logger: console,
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({sequelize}),
});

const runMigrations = async () => {
    try {
        console.log("Running migrations...\n")
        await umzug.up();
        console.log("Migrations executed.")
    } catch (error) {
        await umzug.down();
        console.log("Migration have failed. Error: ", error.message)
    }
}

module.exports = {runMigrations}