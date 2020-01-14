// Log.js
class Log {
    printLog = () => {
      console.log("这是一个Log插件");
    };
  }
  
export default {
  init(app) {
    app.track = new Track(app.options.track);
    app.track.tracking();
  }
};