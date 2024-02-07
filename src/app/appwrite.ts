// appwrite.ts
import { Client, Databases } from "appwrite";

const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1', // Your API Endpoint
  project: '65c336ec85c93deea7a4', // Your project ID
  databaseId: '65c33c17a1c8d3d51504', // Your database ID
  collectionId: '65c33c367e68080a43e2' // Your collection ID
};

const appwriteClient = new Client().setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.project);
const appwriteDatabase = new Databases(appwriteClient);

export { appwriteClient, appwriteDatabase, appwriteConfig };
