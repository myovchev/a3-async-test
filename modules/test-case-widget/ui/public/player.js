apos.util.widgetPlayers['test-case-widget'] = {
  selector: '[data-test-case]',
  player: function (el) {

    function fail(el, res) {
      el.classList.add('test-case--fail');
      res.innerHTML = '<span>FAILED</span>';
    }

    function pass(el) {
      el.classList.add('test-case--pass');
    }

    const res = el.querySelector('.test-case__result');
    if (!res) {
      fail(el, el);
      return;
    }

    if (res.innerHTML.replace(/[\s]+/g, '').length === 0) {
      fail(el, res);
      return;
    }

    pass(el);
  }
};
