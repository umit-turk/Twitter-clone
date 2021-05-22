import React from 'react'

const Container = ({children}) => {
    return (
        <div className="flex min-h-screen mx-auto  max-w-7xl">
            {children}
        </div>
    )
}

export default Container
