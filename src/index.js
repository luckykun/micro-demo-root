import appInit from './app';

appInit();

if (module.hot) {
  module.hot.accept('./app.js', () => {
    window.console.clear();
    appInit();
  });
}

