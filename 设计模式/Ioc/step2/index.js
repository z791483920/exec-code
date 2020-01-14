// index.js
import App from "path/to/App";
import Log from "./Log";
import Track from "./Track";

new App({
  log: new Log(),
  track: new Track(),
  ready() {
    // do something here...
  }
});
