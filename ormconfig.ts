export default {
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        "src/app/models/entities/*.ts",
    ],
    migrations: [
        "src/migrations/**/*.ts",
    ],
    subscribers: [
        "src/subscribers/**/*.ts",
    ],
    "cli": { 
      "entitiesDir": "src/app/models/entities", "migrationsDir": "src/migrations", "subscribersDir": "src/subscribers" 
   } 
}