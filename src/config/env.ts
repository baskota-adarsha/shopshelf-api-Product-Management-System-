import "dotenv/config";
export const env = {
  port: Number(process.env.PORT ?? 3100),
  db: {
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT) ?? 5433,
    user: process.env.DB_USER ?? "postgres",
    pass: process.env.DB_PASS ?? "postgres",
    name: process.env.DB_NAME ?? "shopshelf",
  },

  redisUrl: process.env.REDIS_URL ?? "redis://localhost:6379",
  elasticUrl: process.env.ELASTIC_URL ?? "http://localhost:9200",
  rabbitUrl: process.env.RABBIT_URL ?? "amqp://localhost",
};
