const wait = async (ms) => (new Promise((resolve) => setTimeout(resolve, ms)));

module.exports = {
  options: {
    label: 'Test Cases Definitions',
    alias: 'tc'
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
  },

  helpers(self) {
    return {
      requestTime(start) {
        const startms = start + 0;
        const elapsed = new Date().getTime() - startms;
        return `${Math.round(elapsed / 1000)} sec (${elapsed} ms)`;
      }
    };
  }
};
