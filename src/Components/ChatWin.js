import React from 'react';
import Menu from '../Asset/Menu.png';
import '../Styles/ChatWin.css';

import henry from '../Asset/61.png'





//Some basics .
function Chatwin() {

    return (

        <div className="header">

            <div className="header_box">

                <div>
                    <img src={Menu} className="menuimage" alt="menu logo" />


                </div>

                <div className="heading" >

                    <h1> Manifest </h1>
                </div>





            </div>
            <div style={{ height: "6%" }} >

                <img className="henryimage" src={henry} />

                <h1 style={{ marginLeft: "17vw" }} >Henry</h1>
                <h3 style={{ marginLeft: "14vw" }} >TRANSFER SPECIALIST</h3>



            </div>
        </div>
    )
}


export default Chatwin;