import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Watermark } from './watermark';
import { Legend } from './legend';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit  {
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.937, 15.5044], // Location of Zielona Góra - default
      zoom: 14,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '© OpenStreetMap',
      }
    )

    tiles.addTo(this.map);

    new Watermark({ position: 'topright' }).addTo(this.map);
    new Legend({ position: 'topright' }).addTo(this.map);

  }

  public getMap() {
    return this.map;
  }

  ngAfterViewInit(): void {
    this.initMap();

  }
}
