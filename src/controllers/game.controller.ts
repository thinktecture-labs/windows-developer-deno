import { Controller } from "./controller.ts";
import {
  Router,
  RouterContext,
  BodyOptions,
} from "https://deno.land/x/oak/mod.ts";
import { GameEntity } from "../database/game.entity.ts";
import { databaseProvider } from "../database/index.ts";

export class GameController implements Controller {
  initialize(router: Router): void {
    router.get("/games", (context) => this.list(context));
    router.post("/games", (context) => this.create(context));
    router.put("/games", (context) => this.update(context));
    router.delete("/games/:id", (context) => this.delete(context));
  }

  async list(context: RouterContext): Promise<void> {
    context.response.body = await GameEntity.all();
  }

  async create(context: RouterContext): Promise<void> {
    const { value } = await context.request.body();
    const { name, type, developer, publisher } = value;

    try {
      await GameEntity.create([{
        name,
        type,
        developer,
        publisher,
      }]);

      await databaseProvider.save();

      context.response.status = 200;
    } catch (error) {
      console.error(error);
      context.throw(500);
    }
  }

  async update(context: RouterContext): Promise<void> {
    const { value } = await context.request.body();
    const { id } = value;

    const entity = await GameEntity.find(id);

    if (!entity.length) {
      return;
    }

    try {
      await GameEntity.where("id", id).update(value);
      await databaseProvider.save();
      context.response.status = 200;
    } catch (error) {
      console.error(error);
      context.throw(500);
    }
  }

  async delete(context: RouterContext): Promise<void> {
    const { id } = context.params;

    if (!id) {
      return;
    }

    try {
      await GameEntity.deleteById(id);
      await databaseProvider.save();
      context.response.status = 200;
    } catch (error) {
      console.error(error);
      context.throw(500);
    }
  }
}
