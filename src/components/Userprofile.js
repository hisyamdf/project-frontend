import React, { useState, useRef }  from 'react'
import Dropdown from '../components/Dropdown'
import { Overlay } from "react-bootstrap";

const Userprofile = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <div>
            <i
            className="bi bi-person-circle d-block text-white"
            style={{ transition: "margin 0.125s ease", fontSize: "36px", borderRadius: "50%" }}
            ref={target}
            onClick={() =>
            setShow(!show)}
          ></i>
          <Overlay target={target.current} show={show} placement="bottom-start">
        {(props) => (
          <div
          {...props}
          style={{
            backgroundColor: 'rgba(30, 30, 30, 1)',
            color: 'white',
            borderRadius: 10,
            ...props.style,
          }}
        >
          <Dropdown/>
        </div>
        )}
          </Overlay>
        </div>
    )
}

export default Userprofile
