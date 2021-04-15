module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Test Case 3'
  },
  fields: {
    add: {
      f1: {
        type: 'area',
        options: {
          widgets: {
            'test-case': {}
          },
          max: 1
        }
      },
      f2: {
        type: 'area',
        options: {
          widgets: {
            'test-case': {}
          },
          max: 1
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main1',
          'main2'
        ]
      }
    }
  }
};
