import { useState } from 'react';
import classes from './list.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
const List = ({isPosting, onStopPosting}) => {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value)
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }


    return (
        <>
            {isPosting ? <Modal onClose={onStopPosting}>

                <NewPost onBodyChange={bodyChangeHandler} onNameChange={nameChangeHandler} />
            </Modal> : false}

            <ul className={classes.posts}>
                <Post name={enteredName} text={enteredBody} />
                <Post name="Peliachyk" text="Hello, I am Peliachyk" />
            </ul>


        </>
    )
}

export default List;