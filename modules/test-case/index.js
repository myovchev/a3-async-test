const wait = async (ms) => (new Promise((resolve) => setTimeout(resolve, ms)));

module.exports = {
  options: {
    label: 'Test Cases Definitions'
  },

  customTags: require('./lib/async-tags'),

  components(self) {
    return {
      async component(req, data) {
        // Real async!
        await wait(1);
        return {
          result: 'Async component data'
        };
      }
    };
  }
};
