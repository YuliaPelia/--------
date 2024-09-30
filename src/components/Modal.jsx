import classes from './modal.module.css'

const Modal = ({ children, onClose }) => {
    return (
        <>
            <div onClick={onClose} className={classes.backdrop}>
                <dialog open className={classes.modal}>{children}</dialog>
            </div>
        </>
    )
}


export default Modal