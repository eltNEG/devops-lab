import dotenv from 'dotenv';

const loadConfig = (environment) => {
  dotenv.config({ silent: true });
  if (environment !== 'PRODUCTION') {
    process.env.PORT = process.env[`${environment}_PORT`];
    console.log('Environment: ', environment);
  }
};

export default loadConfig;
