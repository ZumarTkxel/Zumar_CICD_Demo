import request from "supertest";
import express from "express";

const app = express();
app.get("/", (_req, res) => res.json({ ok: true }));

test("GET / returns ok:true", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(200);
  expect(res.body.ok).toBe(true);
});
