import config from "./config.json";

export default (environment, set = false) => {
  if (set) {
    process.env.NODE_ENV = environment;
  }
  const envConfig = config[environment];
  if (envConfig) {
    console.debug("environment: ", environment);
    Object.keys(envConfig).forEach(key => (process.env[key] = envConfig[key]));
  }
};
