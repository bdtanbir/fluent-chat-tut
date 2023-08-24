import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '64e594bfe8593d880ee1'
export const DATABASE_ID = '64e5961ae051fb201918'
export const COLLECTION_ID_MESSAGES = '64e5961f8e2cac4f64f2'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e594bfe8593d880ee1');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;