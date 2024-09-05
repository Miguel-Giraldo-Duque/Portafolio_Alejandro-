import React, { createContext } from 'react'

import { data, allowedTags } from './data'

export const Db = createContext()
export const RequierdTags = createContext()


console.log(Db)
export const DbProvider = ({children}) => {
    return(
        <Db.Provider value={data} >
            <RequierdTags.Provider value={allowedTags}>
                {children}
            </RequierdTags.Provider>
        </Db.Provider>
    )
}