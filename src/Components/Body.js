import React, { Fragment } from 'react'
import Google from '../Img/Google.jpg'
import '../App.css'

export default function Body() {
    return (
        <Fragment>
            <section className='google-Body'>
                <div>
                    <img src={Google} alt='Google' width='20%' className='img_google' /></div>


                <div className='search'>
                    <div className="iconLeft">
                        <span >
                            <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg></span>
                    </div>
                    <input type="text" className="inputText" />
                    <div className="iconRight">
                        <span >
                            <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-mic-fill icon-voice" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                <path fill-rule="evenodd" d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            </svg></span>
                    </div>
                </div>

                <button className='btn btn-light'>Google Search</button>
                <button className='btn btn-light'>I'm Feeling Lucky</button>
            </section>
        </Fragment>
    )
}
