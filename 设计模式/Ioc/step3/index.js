// index.js

import App from "./App";
import Log from "./Log";
import Track from "./Track";
import Game from "./Game";

App.use([Log, Track, Game]);

new App({
  log: {
    // ...
  },
  track: {
    deep: true
  },
  game: {
    playTime: "2小时"
  },
  onReady(app) {
    app.play("DMC5");
    // app.options ... dosomething
  }
});
