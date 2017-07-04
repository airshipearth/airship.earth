// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAbloPiC4iZFIARSPkxHxAIIsLMFYKxWxk',
    authDomain: 'airship-earth-development.firebaseapp.com',
    databaseURL: 'https://airship-earth-development.firebaseio.com',
    projectId: 'airship-earth-development',
    storageBucket: '',
    messagingSenderId: '536757527605'
  }
};
