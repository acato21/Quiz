import { shuffle } from "@/functions/array";
import { AnswerModel } from "./Answer";

export class QuestionModel{
    private id: number;
    private enunciation: string;
    private answers: AnswerModel[];
    private correct: boolean;

    constructor(id: number, enunciation: string, answers: AnswerModel[], correct = false) {
        this.id = id;
        this.enunciation = enunciation;
        this.answers = answers;
        this.correct = correct;
    }

    get Id() : number{
        return this.id;
    }

    get Enunciation() : string{
        return this.enunciation
    }

    get Answers() : AnswerModel[] {
        return this.answers;
    }

    get Correct() : boolean {
        return this.correct;
    }

    get answered() : boolean {
        for(let answer of this.answers){
            if(answer.Revealed) return true
        }

        return false
    }

    shuffleAnswers() : QuestionModel{
        const scrambledAnswers = shuffle(this.answers)
        return new QuestionModel(this.id, this.enunciation, scrambledAnswers, this.correct)
    }

    toObject(){
        return {
            id: this.id,
            enunciation: this.enunciation,
            answers: this.answers.map(answer => answer.toObject()),
            correct: this.correct
        }
    }
}