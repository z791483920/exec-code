// Track.js
class Track {
    constructor(options) {
      // dosomething
    }
    tracking() {
      console.log("这是一个代码打点插件");
    }
  }
  
  export default {
    init(app) {
      app.track = new Track(app.options.track);
      app.track.tracking();
    }
  };