import { Component } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nmro?:number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app con angular';

  arrCard: Tarjeta[]=[];

  ngOnInit(): void{
    this.arrCard= [
      {titulo:'vedeo 1', subtitulo:' sub titulo 1'},
      {titulo:'vedeo 2', subtitulo:' sub titulo 2'},
      {titulo:'vedeo 3', subtitulo:' sub titulo 3'}
    ]

  }

}
