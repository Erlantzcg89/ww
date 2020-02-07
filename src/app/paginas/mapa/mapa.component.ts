import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  pjX: number;
  pjY: number;
  pjAncho: number;
  pjAlto: number;

  constructor() {
    console.log('MapaComponent constructor');



  }// constructor

  ngOnInit() {
    console.log('MapaComponent ngOnInit');

    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.pjX = 200;
    this.pjY = 50;
    this.pjAncho = 10;
    this.pjAlto = 10;

    setInterval(this.dibujar, 500);

  }// ngOnInit

  dibujar() {
    console.log('dibujando');

  }

}// MapaComponent
