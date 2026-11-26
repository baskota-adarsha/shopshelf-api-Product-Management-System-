import app from "./app";
import { env } from "./config/env";
import { sequelize } from "./config/database";

async function start(): Promise<void> {
  await sequelize.authenticate();
  console.log("PostgreSQL connected");
  app.listen(env.port, () => {
    console.log(`Shopself api running on PORT ${env.port}`);
  });
}

start().catch((error) => {
  console.log("Failed to start", error);
  process.exit(1);
});
