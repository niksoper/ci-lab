
module.exports = {
      reset: function() {
        // TODO is it wrong to use 'this' here?
        this.isNoughtToPlay = true;
        this.winner = false;
        this.isGameOver = false;

        this.board = [
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"]
        ];

        console.log("model has been reset");
      },
    };
