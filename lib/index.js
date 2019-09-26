const path = require("path");
const YeoEnv = require("yeoman-environment");

const GENERATOR_NAME = "generator-blockstack:app";

exports.createAppGen = function createAppGen({
  args,
  options
} = {}) {
  const appPath = path.join(__dirname, "../app");
  const env = YeoEnv.createEnv();
  env.register(appPath, GENERATOR_NAME);

  const runFn = () => {
    const runArgs = [GENERATOR_NAME];
    if (typeof args === "string") {
      runArgs.push(args);
    } else if (Array.isArray(args)) {
      runArgs.push(...args);
    }
    const runResult = env.run(runArgs, options);
    return Promise.resolve(runResult);
  };

  return { run: runFn, env: env };
}
