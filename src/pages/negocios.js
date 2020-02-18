import React from "react";

import Regresar from '../components/regresar';
import BarraImgNegocios from '../components/barra-img-negocios';
import InfoNegocios from '../components/info-negocios';
import OpinionsUsers from '../components/opinions-users';
import MenuNegocios from "../components/menu-negocios";
import MyMapComponent from "../components/ubicacion";



function Negocios() {
    return (
        <div>
            <Regresar/>
            <BarraImgNegocios/>
            <InfoNegocios/> 
            <OpinionsUsers />
            <MenuNegocios />
            /* componente mapa de prueba */
            <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
            
        </div>

    )
}

export default Negocios;