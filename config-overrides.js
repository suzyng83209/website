const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: "css" }],
    config
  );
  config = rewireLess(config, env, {
    modifyVars: { "@primary-color": "#EA7792" }
  });
  return config;
};
