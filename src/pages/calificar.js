import React, {Component} from "react";
import Taqueria from "../assets/images/Pastor.jpg";
function Calificar() {
    return (
        
        <section>
            <img src={Taqueria} alt="Taqueria"></img>
            <h3>Taqueria Don Chucho</h3>
            <p>Te recomendamos que pruebes la salsa toreada en tu proxima visita.</p>
        <div>
            <h2>Califica</h2>
                <form>
                    <p className="clasificacion">
                        <input id="radio1" type="radio" name="estrellas" value="5"/>
                        <label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4"/>
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3"/>
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2"/>
                        <label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1"/>
                        <label for="radio5">★</label>
                    </p>
                    <div class="item5">
                        <textarea class="commit" name="comentarios" rows="6" cols="40">Escribe aquí tus comentarios</textarea>
                    </div>
            </form>
        </div>
        <button>
        Enviar
      </button>
        
        </section>
    );
    
}

export default Calificar;