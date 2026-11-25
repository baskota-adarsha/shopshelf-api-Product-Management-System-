import app from "./app";
import { env } from "./config/env";

app.listen(env.port, () => {
  console.log(`Shopself api running on PORT ${env.port}`);
});
