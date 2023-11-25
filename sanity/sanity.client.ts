import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "n398gnju",
  dataset: "production",
  apiVersion: "2023-11-24",
  useCdn: false,
};

const client = createClient(config);

export default client;