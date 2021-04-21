// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      }
    ],
    park: [
      {
        slug: '/test-case-1',
        parkedId: 'test-case-1',
        title: 'Test Case 1',
        type: 'test-case-1'
      },
      {
        slug: '/test-case-2',
        parkedId: 'test-case-2',
        title: 'Test Case 2',
        type: 'test-case-2'
      },
      {
        slug: '/test-case-3',
        parkedId: 'test-case-3',
        title: 'Test Case 3',
        type: 'test-case-3'
      },
      {
        slug: '/test-case-4',
        parkedId: 'test-case-4',
        title: 'Test Case 4',
        type: 'test-case-4'
      },
      {
        slug: '/test-case-5',
        parkedId: 'test-case-5',
        title: 'Test Case 5',
        type: 'test-case-5'
      },
      {
        slug: '/test-case-6',
        parkedId: 'test-case-6',
        title: 'Test Case 6',
        type: 'test-case-6'
      },
      {
        slug: '/test-case-7',
        parkedId: 'test-case-7',
        title: 'Test Case 7',
        type: 'test-case-7'
      },
      {
        slug: '/test-case-8',
        parkedId: 'test-case-8',
        title: 'Test Case 8',
        type: 'test-case-8'
      },
      {
        slug: '/test-case-9',
        parkedId: 'test-case-9',
        title: 'Test Case 9',
        type: 'test-case-9'
      },
      {
        slug: '/test-case-10',
        parkedId: 'test-case-10',
        title: 'Test Case 10',
        type: 'test-case-10'
      },
      {
        slug: '/test-case-11',
        parkedId: 'test-case-11',
        title: 'Test Case 11',
        type: 'test-case-11'
      },
      {
        slug: '/test-case-12',
        parkedId: 'test-case-12',
        title: 'Test Case 12',
        type: 'test-case-12'
      },
      {
        slug: '/test-case-13',
        parkedId: 'test-case-13',
        title: 'Test Case 13',
        type: 'test-case-13'
      }
    ]
  }
};
