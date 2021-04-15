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
      }
    ]
  }
};
