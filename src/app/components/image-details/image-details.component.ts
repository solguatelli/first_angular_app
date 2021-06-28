import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  // Obtener ID de la bicicleta para asi mostrar sus fotos detalle especificas
  bike_id : any;

  bike_details : any;

  constructor(private route : ActivatedRoute) { 
    this.bike_id = this.route.snapshot.params.id;

    this.bike_details = {
      detail1 : "../../../assets/img/bike_details/bike" + this.bike_id + "_detail1.webp",
      detail2 : "../../../assets/img/bike_details/bike" + this.bike_id + "_detail2.webp",
      detail3 : "../../../assets/img/bike_details/bike" + this.bike_id + "_detail3.webp",
    }
  }

  ngOnInit(): void {
  }

}
