import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { CONTROLLERS } from "./controllers/index.ts";

export class HttpServer {
  private readonly app = new Application();

  constructor(private readonly port: number) {
  }

  async listen(): Promise<void> {
    const router = new Router();

    CONTROLLERS.forEach((controller) => controller.initialize(router));

    this.app.use(router.routes());
    this.app.use(router.allowedMethods());

    // Needs --allow-net
    console.log(`Running HTTP Server on port ${this.port}`);
    await this.app.listen({ port: this.port });
  }
}
