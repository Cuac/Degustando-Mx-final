import React from "react";
import './opinions-users.css';

import userAvatar1 from "../assets/images/user-1.png";
import userAvatar2 from "../assets/images/user-2.png";

function OpinionsUsers () {
    return (
        <section>
            <div className="opiniones-users">
                <div className="user-description"> 
                    <div>
                        <img src={userAvatar1} alt="avatarUsuario1" />
                    </div>
                    <div>
                        <p>Limpio y buen servicio, nos atienden rápido siempre</p>
                    </div>
                </div>  
            
                <div className="user-description" > 
                    <div>
                        <img src={userAvatar2} alt="avatarUsuario2" />
                    </div>
                    <div>
                        <p>Buen sabor y buna variedad de salsitas ¡Recomendado!</p>
                    </div>
                </div> 
            </div>
        </section>
    );
  }


export default OpinionsUsers; 