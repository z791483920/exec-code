// App js

class App {
    constructor(options) {
      this.options = options;
      this.log = options.log;
      this.track = options.track;
  
      this.setUp();
    }
  
    setUp() {
      this.log.printLog();
      this.track.tracking();
      this.options.ready();
    }
  }
  
  export default App;
  