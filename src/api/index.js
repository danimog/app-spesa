import { Client as Appwrite, Databases, Account, ID } from "appwrite";
import { Server } from '../utils/config';

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    const account = new Account(appwrite);
    const database = new Databases(appwrite, Server.database);


    api.sdk = { database, account };
    return api.sdk;
  },

  listDocuments: (collectionId) => {
    return api.provider().database.listDocuments(Server.database, collectionId);
  },

  updateDocument: (collectionId, documentId, data) => {
    return api
      .provider()
      .database.updateDocument(Server.database, collectionId, documentId, data);
  },

  deleteDocument: (collectionId, documentId) => {
    return api.provider().database.deleteDocument(Server.database, collectionId, documentId);
  },

  getAccount: () => {
    return api.provider().account.get();
  },
  
  createSession: (email, password) => {
    return api.provider().account.createEmailSession(email, password);
  },

}

export default api;