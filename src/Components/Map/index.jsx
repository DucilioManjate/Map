import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

  const containerStyle = {
  position: 'relative',  
  width: '100%',
  height: '500px',
}


export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: -25.5469, lng: -54.5882, local: "FOZ DO IGUAÇU" }, //definir a latitude e a longitude a ser marcado no mapa nesse caso FOz 
        { lat: -25.4195, lng: -49.2646, local: "Curitiba" },]  //Neste caso curitiba
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: 0,
        lng: 0,
      }}
      />
    })
  }
  
  render() {
    return (


     
        <Map 
          containerStyle={containerStyle}
          google={this.props.google}
          zoom={15} //Irá definir o zoom que o mapa irá ter ao ser carregado em tela
          initialCenter={this.state.stores[0]} //Irá Definir qual a latitude e longitude inicial do mapa
        >

          {this.displayMarkers()}
        </Map>

    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: `AIzaSyBZkJcpaEGmtKfsXlJ1HH1S3swm_fxt1Hg`,
  }
  ))(MapContainer)