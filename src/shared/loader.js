import React from 'react'
import Loader from 'react-loader-spinner'

export const CustomLoader =() =>{    
        return(<Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000} //5 secs
   
         />)
}

