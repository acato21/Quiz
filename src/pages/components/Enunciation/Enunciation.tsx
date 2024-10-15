import styles from "./Enunciation.module.css"

interface EnunciationProps {
    text: string
}

export function Enunciation(props: EnunciationProps){
    return (
        <div className={styles.enunciation}>
            <span className={styles.text}>
                {props.text}
            </span>
        </div>
    )
}