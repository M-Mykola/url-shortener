import { config } from 'dotenv';
config();
// export const createConnection = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@bsds.ido51xc.mongodb.net/?retryWrites=true&w=majority`;
export const createConnection = `mongodb://localhost:27017/`;
