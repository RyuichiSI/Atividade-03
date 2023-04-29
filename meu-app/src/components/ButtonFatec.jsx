import styles from './ButtonFatec.module.css'
function ButtonFatec(props){
    const {type,label}= props
    return(
        <button className={styles.buttonFatec} type={type}>
            {label}
        </button>
        /*
                <button type={props.type}>
                Fatec: {props.label}
            </button>
        */
    )
}

export default ButtonFatec