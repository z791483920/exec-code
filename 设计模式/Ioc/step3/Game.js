// Game.js

class Game {
    constructor(options = {}) {
      this.options = options;
      // dosomething
    }
    playGame(name) {
        if(!name){
            throw new Error('请输入 name')
        }
      if (this.options.playTime) {
        console.log(`我只能玩${name} ${this.options.playTime}`);
      } else {
        console.log(`我能一直玩${name}`);
      }
    }
  }
  
  export default {
    init(app) {
      app.game = new Game(app.options.game);
      app.play = app.game.playGame
    }
  };