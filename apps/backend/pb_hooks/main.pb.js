/// <reference path="../pocketbase.d.ts" />

routerAdd("GET", "/api/hello", (c) => {
  return c.json(200, { message: "KPass backend is running" })
})
