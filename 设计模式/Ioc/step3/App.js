// App.js
class App {
    static modules = [];
    constructor(options) {
      this.options = options;
      this.setUp();
    }
  
    setUp() {
      this.initModules();
      this.options.onReady(this);
    }
  
    static use(module) {
      Array.isArray(module)
        ? module.map(item => App.use(item))
        : App.modules.push(module);
    }
  
    initModules() {
      App.modules.map(
        module =>
          module.setUp && typeof module.setUp == "function" && module.setUp(this)
      );
    }
  }
  