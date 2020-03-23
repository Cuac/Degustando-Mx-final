
import React, {} from "react";
import Regresar from "../components/regresar";
import Taqueria from "../assets/images/Pastor.jpg";
import "../assets/css/calificar.css";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

function Calificar() {
    return (
        
    
        <section className="section">
            <Regresar/>
            <img className="imagen-taqueria" src={Taqueria} alt="Taqueria"></img>
            <h3 className="title-taqueria" >Taqueria Don Chucho</h3>
            <p className="review-taqueria">Te recomendamos que pruebes la salsa toreada en tu proxima visita.</p>
        <div className="qualify" >
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
                    <div>
                        <textarea className="commit1" rows="5" cols="39">Escribe aquí tus comentarios</textarea>
                    </div>
            </form>
        </div>
        <div className="boton-qualify">
        <button className="boton">
        Enviar
      </button>
        </div>
        
        </section>
    );
    
}

export default Calificar;