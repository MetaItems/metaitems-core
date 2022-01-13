module.exports = {
  content: [
    "../lib/**/*.eex",
    "../lib/**/*.heex",
    "../lib/**/*.leex",
    "../lib/**/*_view.ex"
  ],
  options: {
    whitelist: [/phx/, /nprogress/]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
