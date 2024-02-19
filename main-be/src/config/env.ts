import "dotenv/config";
import convict from "convict";

interface ENV {
  env: "production" | "development" | "staging" | "test";
  port: number;
  firebase: { key: string };
}

// Define a schema
const config = convict<ENV>({
  env: {
    doc: "The application environment",
    format: ["production", "development", "staging", "test"],
    default: null,
    env: "NODE_ENV",
    nullable: false,
  },

  port: {
    doc: "The port to bind",
    format: "port",
    default: null,
    env: "PORT",
    nullable: false,
  },
  firebase: {
    key: {
      doc: "Firebase API key",
      format: String,
      default: null,
      env: "FIREBASE_API_KEY",
      nullable: false,
      sensitive: true,
    },
  },
});

config.validate({ allowed: "strict" });

const env = config.getProperties();

export default {
  ...env,
};
