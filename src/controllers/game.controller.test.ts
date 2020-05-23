import { stub } from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/stub.ts";
import { GameController } from "./game.controller.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("create get route", () => {
  const sut = new GameController();
  const router = new Router();
  const getStub = stub(router, "get");

  sut.initialize(router);

  assertEquals(getStub.calls.length, 1);
  assertEquals(getStub.calls[0].args[0], "/games");
});

Deno.test("create post route", () => {
  const sut = new GameController();
  const router = new Router();
  const postStub = stub(router, "post");

  sut.initialize(router);

  assertEquals(postStub.calls.length, 1);
  assertEquals(postStub.calls[0].args[0], "/games");
});

Deno.test("create put route", () => {
  const sut = new GameController();
  const router = new Router();
  const putStub = stub(router, "put");

  sut.initialize(router);

  assertEquals(putStub.calls.length, 1);
  assertEquals(putStub.calls[0].args[0], "/games");
});

Deno.test("create delete route", () => {
  const sut = new GameController();
  const router = new Router();
  const deleteStub = stub(router, "delete");

  sut.initialize(router);

  assertEquals(deleteStub.calls.length, 1);
  assertEquals(deleteStub.calls[0].args[0], "/games/:id");
});
