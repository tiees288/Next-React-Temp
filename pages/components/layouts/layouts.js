import React from 'react'
import Nav from '../Navbar/nav'
import { Provider } from 'react-redux'
import cartStore from '../../store/cartStore'

export default function Layouts(props) {
    // console.log(props.pageName)

    // console.log(cartStore.getState())

    return (
        <div>
            <Nav pageName={props.pageName} />
            <Provider store={cartStore}>
                <pagebody>
                    {props.children}
                </pagebody>
            </Provider>
        </div>
    )
}
