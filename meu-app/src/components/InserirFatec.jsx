import styles from './InserirFatec.module.css'
function InserirFatec(props){
    const {type,placeholder,value}= props
    return(
        <input className={styles.inserirFatec} type={type} placeholder={placeholder}  value={value} >

        </input>
    )
}

export default InserirFatec