import { HttpClient } from '@angular/common/http';
import { Injectable, ValueSansProvider } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { ThrowStmt } from '@angular/compiler';




@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any  = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }


  private cargarInfo(): void {

    this.http.get('assets/Data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }


  private cargarEquipo(): void {

    this.http.get('https://angular-hmtl-c6665-default-rtdb.firebaseio.com/equipo.json')

    .subscribe( ( resp2)  =>  {
        this.equipo =  resp2 ;
      });

}
}

