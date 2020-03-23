import React from "react";
import "../assets/css/opinions-users.css";

function OpinionsUsers() {
  return (
    <section>
      <div className="opiniones-users">
        <div className="user-description">
          <div>
            <img
              src="https://www.gravatar.com/avatar/EMAIL_MD5?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/Gabriel+Perez/128"
              alt="avatarUsuario1"
            />
          </div>
          <div>
            <p>Limpio y buen servicio, nos atienden rápido siempre ¡Los mejores tacos de la zona!</p>
          </div>
        </div>

        <div className="user-description" id="user-2">
          <div>
            <img
              src="https://www.gravatar.com/avatar/EMAIL_MD5?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/Lasse+Rafn/128"
              alt="avatarUsuario2"
            />
          </div>
          <div>
            <p>Buen sabor y buna variedad de salsitas. Los tacos de costilla son el estelar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpinionsUsers;
