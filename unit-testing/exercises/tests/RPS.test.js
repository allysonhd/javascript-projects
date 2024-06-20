const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("check returns 'TIE!' if both players have same type", function(){
        let output = whoWon('rock', 'rock');
        expect(output).toBe("TIE!");
    });

    test("check returns 'Player 2 wins!' if P1 has rock and P2 has paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });

    test("check returns 'Player 2 wins!' if P1 has paper and P2 has scissors", function(){
        let output = whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });
});