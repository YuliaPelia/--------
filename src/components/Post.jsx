// const names = ["Yulia", "Peliachyk"]

import classes from './post.module.css'
const Post = (props) => {

    // const chosenName = Math.random() > 0.5 ? names[0] : names[1]

    return (

        <li className={classes.post}>
            <p className={classes.author}>{props.name}</p>
            <p className={classes.text}>  {props.text}</p>
        </li>

    )
}

export default Post