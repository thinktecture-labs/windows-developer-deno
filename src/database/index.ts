import { Database } from "https://deno.land/x/denodb/mod.ts";
import { GameEntity } from "./game.entity.ts";

export interface DatabaseConfiguration {
  filepath: string;
}

// Needs --allow-read
export class DatabaseProvider {
  private connection?: Database;

  async connect(configuration: DatabaseConfiguration): Promise<void> {
    console.log("Connecting to DB via", configuration);

    this.connection = new Database("sqlite3", configuration);

    this.connection.link([GameEntity]);

    await this.connection.sync({ drop: true });
  }

  async save(): Promise<void> {
    // Needs --allow-write
    await this.connection?.close();
  }
}

export const databaseProvider = new DatabaseProvider();
