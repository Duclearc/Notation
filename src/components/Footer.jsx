import React from 'react'
let year = new Date().getFullYear();

export default function(){
    return(
        <footer>
            <p>Copyright©{year}</p>
        </footer>
    )
}