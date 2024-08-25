import { useState } from 'react';
import classes from './list.module.css';
import Post from './Post';
import NewPost from './NewPost';
const List = () => {

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
            <NewPost onBodyChange={bodyChangeHandler} onNameChange={nameChangeHandler} />
            <ul className={classes.posts}>
                <Post name={enteredName} text={enteredBody} />
                <Post name="Peliachyk" text="Hello, I am Peliachyk" />
            </ul>
        </>
    )
}

export default List;