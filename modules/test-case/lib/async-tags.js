const util = require('util');

module.exports = function (self) {
  return {
    containerAsync: {
      // The parser
      parse(parser, nodes, lexer) {
        // get the tag token
        const token = parser.nextToken();

        // Parse the args and move after the block end.
        const args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(token.value);

        // Parse the body
        const body = parser.parseUntilBlocks('end' + token.value);
        parser.advanceAfterBlockEnd();

        return {
          args,
          blocks: [ body ]
        };
      },

      // The executor
      async run(...args) {
        const [ , ..._args ] = args;

        // This is how we FIX the async rendering
        const body = await util.promisify(_args.pop())();
        const opts = _args.pop() || {};

        const cls = opts.cls ? ` ${opts.cls}` : '';

        // DEBUG
        console.debug('[containerAsync] arguments', opts);
        console.debug('[containerAsync] body', body);

        return `<div class="test-case__result${cls}">${body}</div>`;
      }
    },
    // Just a dummy async tag, it does nothing.
    dummyAsync: {
      async run() {
        return '';
      }
    },
    // Waith given number of seconds and return label or predefined string
    waitAsync: {
      async run(context, seconds, label) {
        const s = seconds + 0;
        await new Promise(resolve => setTimeout(resolve, s * 1000));
        return '<p>' + (label || `Waited ${seconds} second${s !== 1 ? 's' : ''}`) + '</p>';
      }
    }
  };
};
