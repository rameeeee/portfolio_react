import React from 'react'

const Content = ({children}) => {
    return (
        <div className="content" id="content" role="main">
            {children}
        </div>
    )
}

export default Content
