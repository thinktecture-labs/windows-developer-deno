import { DATA_TYPES, Database, Model } from "https://deno.land/x/denodb/mod.ts";

export class GameEntity extends Model {
  static table = "games";
  static timestamp = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DATA_TYPES.STRING,
    type: DATA_TYPES.STRING,
    publisher: DATA_TYPES.STRING,
    developer: DATA_TYPES.STRING,
  };
}
