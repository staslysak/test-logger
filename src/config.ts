import dotenv from "dotenv";

dotenv.config();

const { PORT = 5000 } = process.env;

const config = {
  PORT,
};

export default config;
