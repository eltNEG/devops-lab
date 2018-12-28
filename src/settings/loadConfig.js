import dotenv from "dotenv";

export default (environment) => {
  dotenv.config({ silent: true });
  if(environment !== 'PRODUCTION'){
    process.env.PORT = process.env[`${environment}_PORT`]
  }
}