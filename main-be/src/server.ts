import env from "./config/env";
import express, { Request, Response } from "express";
import cors from "cors";
import restRouter from "./api";

async function startServer() {
  const app = express();
  app.use(express.urlencoded({ extended: true }));

  app.use(
    express.json({
      limit: "5mb",
      verify: (req: Request, res: Response, buffer, encoding) => {
        if (req.headers["stripe-signature"] && buffer && buffer.length) {
          // @ts-ignore
          req.rawBody = buffer.toString(encoding || "utf8");
        }
      },
    })
  );

  const REST_V1_ROOT = "/api/v1";

  app.get("/health", (req, res) => {
    res.json({ message: "Service is healthy" });
  });

  app.use("/api/v1", cors(), restRouter);

  app.listen(env.port, () =>
    console.log(
      "Server is ready at:",
      `\n🚀 REST: http://localhost:${env.port}${REST_V1_ROOT}`
    )
  );
}

startServer().catch((err) => {
  throw err;
});
