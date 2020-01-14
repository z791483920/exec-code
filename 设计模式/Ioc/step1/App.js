// App js
import Log from "./Log";
import Track from "./Track";

class App {
  constructor(options) {
    this.options = options;
    this.log = new Log();
    this.track = new Track();

    this.setUp();
  }

  setUp() {
    this.log.printLog();
    this.track.tracking();
    this.options.ready();
  }
}

export default App;
