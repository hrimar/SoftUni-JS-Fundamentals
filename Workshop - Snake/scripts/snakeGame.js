; const snakeGame = (function () {
    function createGame(config) {
        gameBoard.createGameBoard(config);
    }
    
    function start() {
        gameBoard.start();
    }

    return {
        createGame, // т.е. key and value are with same name
        start
    };
})();