import React from "react";
import MyMapComponent from "../components/ubicacion";
import '../assets/css/mapa.css';


class Mapa extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {latitude:19.39068, longitude:-99.2836971};
  }

  
  componentDidMount() {

   const success = (position) => {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.setState ( {
          latitude, longitude
      });
  
    } 
    
    function error() {
      alert('Unable to retrieve your location');
    }


    if (!navigator.geolocation) {
      alert ('Geolocation is not supported by your browser');
    } else {
      
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  
  
  render() {
      return (
          
        <section>
        <div className="flex-inicio" > 
             <input className="flex-input" placeholder="Buscar ...."   />
           <div>
             <i class="fa fa-bars"></i>
           </div> 
       
           <div>
              <ul>
                <li>Bebidas</li>
                <li>Mexicana</li>
                <li>Vegetariana</li>
                <li>Postres</li>
                <li>Desayunos</li>
                <li>Postres</li>
               </ul>
            </div>
           
            <div className="flex-map" >
              <MyMapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCey8p9i3fkHzj6usQdPXVcAsD3DSNW_Kw&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  location={{lat:this.state.latitude, lng: this.state.longitude}}
              />
           </div>
        </div>
       </section> 

      );
    }
}

export default Mapa;