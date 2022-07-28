import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import * as $ from 'jquery';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(){}

  ngOnInit(): void
  {
    this.initMap();
  }

  private initMap(): void
  {
    this.map = L.map
    (
      'map',
      {
        center: [ 51.937, 15.5044 ],
        zoom: 10
      }
    );

    L.tileLayer
    (
      'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(this.map);

    L.marker
    (
      [51.937, 15.5044], 
      {alt: 'Zielona Góra'}
    ).addTo(this.map).bindPopup('Welcome to Zielona Góra').openPopup();

    var wfs_url = 'http://localhost:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=topp:states&outputFormat=application/json';
    $.getJSON(wfs_url).then
    (
      (response) =>
      {
        L.geoJSON(response).addTo(this.map)
      }
    )
  }

  private map: any
}
