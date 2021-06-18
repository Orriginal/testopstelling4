module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss/register',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-actions/',
    '@storybook/addon-a11y/register',
    'storybook-addon-designs'
  ]
}
