import React from 'react';

export const themes={
    dark:{
        color:'white',
        background:'rgba(0,0,0,0.6)'

    },
    light:{
        color:'black',
        background:'rgba(255,255,255,0.2)'

    }
}

 const ThemeContext =React.createContext(themes.dark);

 export default ThemeContext;