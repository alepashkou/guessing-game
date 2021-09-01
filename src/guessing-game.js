class GuessingGame {

    constructor() {

    }

    setRange(min, max) {

        this.low = min;

        this.high = max;

    }

    guess() {

        this.perem = Math.ceil((this.low + this.high) / 2);

        return this.perem;

    }

    lower() {

        this.high = this.perem;

    }

    greater() {

        this.low = this.perem;
        
    }
}

module.exports = GuessingGame;