export class AnswerModel {
    private value: string;
    private correct: boolean;
    private revealed: boolean;

    constructor(value: string, correct: boolean, revealed = false) {
        this.value = value;
        this.correct = correct;
        this.revealed = revealed;
    }

    static correct(value: string) : AnswerModel {
        return new AnswerModel(value, true);
    }

    static wrong(value: string) : AnswerModel {
        return new AnswerModel(value, false);
    }

    get Value() : string {
        return this.value;
    }

    get Correct() : boolean {
        return this.correct;
    }

    get Revealed() : boolean {
        return this.revealed;
    }

    toObject(){
        return {
            value: this.value,
            correct: this.correct,
            revealed: this.revealed
        }
    }
}