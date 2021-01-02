import { ServerRequest } from "https://deno.land/std@0.83.0/http/server.ts";
import { listPersons } from "./controllers/person.controller.ts";

function router(req: ServerRequest) {
  if (req.method == "GET") {
    switch (req.url) {
      case "/":
        return req.respond(
          ({
            status: 200,
            body: JSON.stringify({
              message: "Welcome to my Deno API!",
              time: new Date(),
            }),
          }),
        );

      case "/persons":
        return listPersons(req);

      default:
        return req.respond({
          body: JSON.stringify({
            message: "This page does not exist!",
          }),
        });
    }
  }
}

export default router;
