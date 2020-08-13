import React, { useContext, useState } from 'react'

import ThemeContext from './theme-context'

export default function Button(props) {

 
    return(
        <>
        <button style={{position:'absolute', right: '1rem',top: '4rem'}} onClick={props.clickBtn}>Change Theme</button>
        </>
    )
}