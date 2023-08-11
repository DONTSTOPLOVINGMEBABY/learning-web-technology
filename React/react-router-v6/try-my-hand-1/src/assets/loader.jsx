import styles from '../public/loader.module.css'

function Loader () {
    return (
        <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader