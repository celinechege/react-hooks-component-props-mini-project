import React from 'react'

function Article(post) {
    //  console.log(post);
    const { title, date= "January 1, 1970", preview} = post
    // console.log(preview);


    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    )
}


export default Article