# Create React App and Sentry example

A complete example to the [article](https://medium.com/@vshab/create-react-app-and-sentry-cde1f15cbaa)

## Commands

- `yarn start` to start dev server (Sentry initializtion will be ommited)
- `yarn build` to build the app (Sentry initializtion will be ommited)
- `yarn release` to build the app with Sentry and create Sentry release with its (don't forget to set SENTRY_AUTH_TOKEN)

## How to run

1. Fill your project data in `.sentryclirc`
2. Replace `YOUR_SENTRY_DSN` with your Sentry project DSN in `src/index.js`
3. Run `SENTRY_AUTH_TOKEN=YOUR_SENTRY_AUTH_TOKEN yarn release`

## License

This code is MIT License.
