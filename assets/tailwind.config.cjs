module.exports = {
  content: [
    "../lib/**/*.eex",
    "../lib/**/*.heex",
    "../lib/**/*.leex",
    "../lib/**/*_view.ex",
    '../js/**/*.js'
  ],
  options: {
    whitelist: [/phx/, /nprogress/]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    utils: true,
    logs: true,
    rtl: false,
    themes: [
      {
      'meta': {
        'primary': '#570df8',
        'primary-focus': '#570df8',
        'primary-content': '#570df8',
        'secondary': '#570df8',
        'secondary-focus': '#570df8',
        'secondary-content': '#570df8',
        'neutral': '#570df8',
        'neutral-focus': '#570df8',
        'neutral-content': '#570df8',
        'base-100': '#ffffff',
        'base-200': '#ffffff',
        'base-300': '#ffffff',
        'base-content': '#ffffff',
        'info': '#ffffff',
        'success': '#ffffff',
        'warning': '#ffffff',
        'error': '#ffffff'
      },
    },
    'meta',
    'light'
    ],
  },
};
