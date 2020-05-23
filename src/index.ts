import { HttpServer } from "./http-server.ts";
import {
  databaseProvider,
  DatabaseConfiguration,
} from "./database/index.ts";

// Needs --allow-env
const port = Deno.env.get("PORT") || 8080;

const databaseConfiguration: DatabaseConfiguration = {
  filepath: Deno.env.get("DB_FILEPATH") || "./windows-developer.sqlite",
};

const httpServer = new HttpServer(+port);

await databaseProvider.connect(databaseConfiguration);
await httpServer.listen();
