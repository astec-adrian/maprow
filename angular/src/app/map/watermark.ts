import * as L from 'leaflet';

export class Watermark extends L.Control {
  override onAdd(_map: L.Map) {
    let img = L.DomUtil.create('img');
    img.src = '../assets/logo_2.png';
    img.style.width = '150px';
    return img;
  }

  constructor(options?: L.ControlOptions) {
    super(options);
  }
}
