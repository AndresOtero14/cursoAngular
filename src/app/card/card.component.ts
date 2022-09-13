import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  image: string = "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/58646/audi-r8_v10_decennium-2019-1600-01.jpg"
  titulo: string = " Curso de angular con interpolación"


  constructor() { }

  ngOnInit(): void {
  }

}
