import { QuestionModel } from "@/model/Question"
import styles from "./Question.module.css"
import { Enunciation } from "../Enunciation/Enunciation";

interface QuestionProps {
    value: QuestionModel
}

export function Question(props: QuestionProps){
    const question = props.value;

    return(
        <div className={styles.question}>
            <Enunciation text={question.Enunciation}/>
        </div>
    )
}