import { AnswerModel } from "@/model/Answer"
import { Question } from "./components/Question/Question"
import { QuestionModel } from "@/model/Question"

import styles from "../styles/index.module.css"

export default function Home(){
    const questionTest = new QuestionModel(1, "Better Color?", [
        AnswerModel.wrong("Green"),
        AnswerModel.wrong("Red"),
        AnswerModel.wrong("Blue"),
        AnswerModel.correct("Black")
    ])

    return (
        <div className={styles.index}>
            <Question value={questionTest} />
        </div>
    )
}