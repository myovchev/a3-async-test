module.exports = {
  extendMethods(self) {
    return {
      // This configures the @apostrophecms/templates module to add our custom nunjucks environment
      newEnv(_super, req, name, folders) {
        const env = _super(req, name, folders);
        require('../../test-case/lib/tags')(self, env);

        return env;
      }
    };
  }
};
