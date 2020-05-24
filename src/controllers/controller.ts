import { Router } from "https://deno.land/x/oak@v4.0.0/mod.ts";

export interface Controller {
  initialize(router: Router): void;
}
