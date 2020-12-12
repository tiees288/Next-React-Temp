import React from 'react'
import Nav from '../nav'

export default function Layouts(props) {
    console.log(props.pageName)
    return (
        <div>
            <Nav pageName={props.pageName} />
            <pagebody>
                {props.children}
            </pagebody>
        </div>
    )
}
