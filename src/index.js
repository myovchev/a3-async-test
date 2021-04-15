// Your own project level JS may go here

const testCases = [ ...document.querySelectorAll('.test-case') ];
function fail(el, res) {
  el.classList.add('test-case--fail');
  res.innerHTML = '<span>FAILED</span>';
}

function pass(el) {
  el.classList.add('test-case--pass');
}

if (testCases.length > 0) {
  for (const tc of testCases) {
    const res = tc.querySelector('.test-case__result');
    if (!res) {
      fail(tc, tc);
      continue;
    }

    if (res.innerHTML.replace(/[\s]+/g, '').length === 0) {
      fail(tc, res);
      continue;
    }

    pass(tc);
  }
}
