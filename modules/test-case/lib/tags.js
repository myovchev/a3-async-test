// Extensions are registered via the sync `CallExtension` call.
// This causes big troubles with Apostrophe 3 async components.
class Tags {
  constructor(apos) {
    this.tags = [ 'container' ];
    this.apos = apos;
  }

  parse(parser, nodes) {
    const token = parser.nextToken(); // Get the tag token

    // Parse the args and move after the block end.
    const args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(token.value);

    // Parse the body
    const body = parser.parseUntilBlocks('end' + token.value);
    parser.advanceAfterBlockEnd();

    switch (token.value) {
      case 'container':
        return new nodes.CallExtension(this, 'runContainer', args, [ body ]);

      default:
        throw new Error(`definition for tag ${token.value} not found`);
    }
  }

  /**
   * Usage (options are optional):
   * {% container { cls: 'some class list' } %}
   *   ...body
   * {% endcontainer %}
   */
  runContainer(ctx, ...args) {
    const [ opts, content ] = this._parseArgs(args, [ {} ]);
    const html = this._createContainer(content, opts);
    return this.apos.template.safe(html);
  }

  _createContainer(content, options = {}) {
    let html = '';
    const cls = options.cls ? ' ' + options.cls : '';

    html += `\r<div class="test-case__result${cls}">\n\r`;
    html += content;
    html += '\r</div>';

    return html;
  }

  _parseArgs(all, defaults = []) {
    const args = [ ...all ];
    const bodyFn = args.pop();
    // This causes the async rendering trouble. The async components in the body
    // needs to be awaited (a standard JS callback of type cb(err, result) ).
    // Since we are in sync mode I'm not aware of any possible solution here.
    const body = typeof bodyFn === 'function' ? bodyFn() : '';

    // a tag without body, revert
    if (typeof bodyFn !== 'function') {
      args.push(bodyFn);
    }

    return [
      ...defaults.map((val, i) => (typeof args[i] !== 'undefined' ? args[i] : val)),
      body
    ];
  }
}

// self here is the `@apostrophecms/template` context!
module.exports = function (templateSelf, env) {
  // Register module extension
  env.addExtension('CustomTags', new Tags(templateSelf.apos));
};
