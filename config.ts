import { config } from 'dotenv';

config();

const { SERVER_HOST = 'localhost', SERVER_PORT = 3000 } = process.env;

export { SERVER_HOST, SERVER_PORT };
