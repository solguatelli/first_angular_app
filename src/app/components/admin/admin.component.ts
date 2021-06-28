import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //este atributo contendra al listado de clientes que obtendremos del servicio de clientes
  clientes: any;

   //inyectamos nuestro servicio de productos en el contructor mediante el DI
  constructor(private productosService : ProductosService, private bikeService : BikeService) {
    /* this.clientes = this.productosService.clientes */
    // Inyeccion de servicio Bike usando Http 
    this.bikeService.getBikes().subscribe(
      data => {this.clientes = data},
      error => {console.log(error)}
    )
   }

  /* saveId(event : any){
    console.log("name clicked! Saving id...")
    console.log(event.srcElement.innerText);
  } */

  ngOnInit(): void {
  }

}
