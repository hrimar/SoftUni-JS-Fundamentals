// // var.2 - with pure functions:
//  ; const snake = (function () {
//     let snakeData ={
//         headPositionX: null,
//         headPositionY: null,
//         body: [],
//         move: null
//     };
//
//     function generateSnakeUI(boardSize, snakeSize) {
//         snakeData.headPositionX = parseInt(boardSize / 2);
//         snakeData.headPositionY = parseInt(boardSize / 2);
//
//         for (let i = 0; i < snakeSize; i++) { // generate body of the snake
//             snakeData.body.push(`${snakeData.headPositionX-i}${snakeData.headPositionY}`);
//         }
//
//         snakeData.body.forEach((item) => {
//             document.getElementById(item).className= 'snake';
//         });
//     }
//
//     function createSnake(config) {
//         generateSnakeUI(config.boardSize, config.snakeSize);
//     }
//
//     function moveHead() {
//         snakeData.move();
//     }
//
//
//
//     function getPotencialSnakePosition(snake) { // pure func
//         const snakeClone = JSON.parse(JSON.stringify(snake));
//
//         const head = `${snakeClone.headPositionX}${snakeClone.headPositionY}`;
//         const tail = snakeClone.body.pop();
//
//         return {         // returns object
//             head,
//             tail
//         };
//     }
//
//
//     function getUpdateSnakePosition() {
//         const snakePotentialInfo = getPotencialSnakePosition(snakeData);
//
//         const snakeClone = JSON.parse(JSON.stringify(snake)); // copy of object
//
//         snakeClone.body.unshift(snakePotentialInfo.head);
//         const tail = snakeClone.splice(snakePotentialInfo.tail, 1);
//
//         uiDrawer.draw(snakePotentialInfo.head, "snake");
//         uiDrawer.draw(snakePotentialInfo.tail, "");
//
//         return snakeClone;
//
//     }
//
//     function setMoveDirection(direction) {
//         if(direction === "right" ){
//             snakeData.move = () => { snakeData.headPositionX += 1;  };
//         } else  if(direction === "left" ){
//             snakeData.move = () => { snakeData.headPositionX -= 1;  };
//         } else  if(direction === "down" ){
//             snakeData.move = () => { snakeData.headPositionY += 1;  };
//         } else  if(direction === "up" ){
//             snakeData.move = () => { snakeData.headPositionY -= 1;  };
//         }
//     }
//
//     function getSnake() {
//         return snakeData;
//     }
//
//     function setSnake(snake) {
//         snakeData =snake;
//
//         return snake;
//     }
//
//     function grow() {
//         snakeData.body.unshift(`${snakeData.headPositionX}${snakeData.headPositionY}`);
//         snakeData.move();
//     }
//
//     return {
//         createSnake,
//         moveHead,
//         setMoveDirection,
//         getSnake,
//         setSnake,
//         getUpdateSnakePosition,
//         grow
//     };
//
// })();

//var.1 - impure functions
; const snake = (function () {
    const snakeData ={
        headPositionX: null,
        headPositionY: null,
        body: [],
        move: null
    };

    function generateSnakeUI(boardSize, snakeSize) {
        snakeData.headPositionX = parseInt(boardSize/2);
        snakeData.headPositionY = parseInt(boardSize/2);

        for (let i = 0; i < snakeSize; i++) { // generate body of the snake
            snakeData.body.push(`${snakeData.headPositionX-i}${snakeData.headPositionY}`);
        }

        snakeData.body.forEach((item) => {
            document.getElementById(item).className= 'snake';
        });
    }

    function createSnake(config) {
        generateSnakeUI(config.boardSize, config.snakeSize);
    }

    function moveHead() {
        snakeData.move();
    }

    function updateSnakePosition() {
        const head = `${snakeData.headPositionX}${snakeData.headPositionY}`;

        snakeData.body.unshift(head);
        const tail = snakeData.body.pop();

        document.getElementById(tail).className = "";
        document.getElementById(head).className = "snake";
    }

    function setMoveDirection(direction) {
        if(direction === "right" ){
            snakeData.move = () => { snakeData.headPositionX += 1;  };
        } else  if(direction === "left" ){
            snakeData.move = () => { snakeData.headPositionX -= 1;  };
        } else  if(direction === "down" ){
            snakeData.move = () => { snakeData.headPositionY += 1;  };
        } else  if(direction === "up" ){
            snakeData.move = () => { snakeData.headPositionY -= 1;  };
        }
    }

    function getSnake() {
        return snakeData;
    }

    function grow() {
        snakeData.body.unshift(`${snakeData.headPositionX}${snakeData.headPositionY}`);
        snakeData.move();
    }

    return {
        createSnake,
        moveHead,
        setMoveDirection,
        getSnake,
        updateSnakePosition,
        grow
    };

})();