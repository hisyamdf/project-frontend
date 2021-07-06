import React from 'react'
import joker from '../assets/images/joker.jpg'

const Landingpage = () => {
    return (
        <header>
            <div
          className="bg landing-page"
          style={{
            background: `url(${joker}) no-repeat center /cover`,
          }}
        />
        </header>
    )
}

export default Landingpage
