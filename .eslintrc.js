module.exports = {
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  // Airbnb is great but very strict. Feel free to relax any rule.
  rules: {
    'array-callback-return': 0,
    'no-unused-expressions': 0,
    'no-tabs': 0,
    'indent': ['error', 'tab'],
    'linebreak-style': 0,
    'no-continue': 0,
    'no-unused-vars': 1,
    'prefer-destructuring': 0,
    'consistent-return': 0, // Control freaky.
    'default-case': 0, // Control freaky.
    'guard-for-in': 0, // It's not a bug it's a feature.
    'import/first': 0, // Nobody cares about imports order.
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-for': ['error', { allowChildren: true }],
    'import/prefer-default-export': 0, // Control freaky.
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-nested-ternary': 0, // Control freaky.
    'no-param-reassign': 0, // We love param reassignment. Naming is hard.
    'no-plusplus': 0, // Control freaky.
    'no-restricted-syntax': 0, // Not needed with modern browsers.
    'no-shadow': 0, // Shadowing is a nice language feature. Naming is hard.
    'no-underscore-dangle': 0, // Control freaky.
    'react/default-props-match-prop-types': 0, // Buggy.
    'react/forbid-prop-types': 0, // Control freaky.
    'react/jsx-boolean-value': 0, // Control freaky.
    'react/jsx-curly-brace-presence': 0, // styled-jsx
    'react/jsx-filename-extension': 0, // JSX belongs to .js files.
    'react/no-danger': 0, // Control freaky.
    'react/destructuring-assignment': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/prop-types': 0,
    'react/sort-comp': [
      2,
      {
        order: ['static-methods', 'type-annotations', 'lifecycle', 'everything-else', 'render'],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
        },
      },
    ],
    'sort-imports': 0,
    'spaced-comment': 0, // We don't care.
  },
};
