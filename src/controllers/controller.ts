import { Router } from 'https://deno.land/x/oak/mod.ts';

export interface Controller {
    initialize(router: Router): void;
}
