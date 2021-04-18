import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos-description.interface';
import { ProductosService } from '../../services/productos.service';




@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  productos: any = [] ;
  id: any;


  constructor( private route: ActivatedRoute,
               public productosService: ProductosService) { }

  ngOnInit(): void {

      this.route.params.subscribe (
       parametros => {
        this.productosService.getProducto( parametros['id'])
          .subscribe(  (producto: any) => {
                  this.productos = producto ;
                  this.id = parametros ['id'];

                  //console.log( producto);
           });





      }
    );



  }


}








