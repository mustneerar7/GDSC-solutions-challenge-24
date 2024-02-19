import env from "./env";

const googleServiceAccount = {
  projectId: "barter-app-9c76e",
  clientEmail: env.firebase.email,
  privateKey: env.firebase.key.replace(/\\n/g, "\n"),
};

export default googleServiceAccount;
