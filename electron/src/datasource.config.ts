import {DataSourceOptions} from "typeorm";
import path from "path";

function nodeEnvIsTest() {
    return process.env.NODE_ENV === "test";
}

export function getConfig() {
    return {
        type: "sqlite",
        database: nodeEnvIsTest() ? "./__tests__/desafio_contabil.test.sqlite" : "desafio_contabil.sqlite",
        synchronize: nodeEnvIsTest(),
        logging: false,
        dropSchema: nodeEnvIsTest(),
        migrationsRun: true,
        autoLoadEntities: nodeEnvIsTest(),
        entities: ["src/entity/index.ts", path.join(__dirname, "**/*.entity{.ts,.js}")],
        migrations: ["src/infra/database/migration/*.ts"],
        subscribers: []
    } as DataSourceOptions
}