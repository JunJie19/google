import React, { Fragment } from 'react'
import '../App.css'

export default function Footer() {
    return (
        <Fragment>
            <footer className='footer'>
                <div className='footer_1'> United Kingdom</div>
                <div className='footer_2'>
                    <div className='footer_left'><li>Advertising</li>
                        <li> Business</li>
                        <li>How Search Works</li> </div>


                    <div>Carbon neural since 2007</div>
                    <div className='footer_right'> <li>Privacy</li>
                        <li>Terms</li>
                        <li>Settings</li></div>

                </div>
            </footer>
        </Fragment>
    )
}
