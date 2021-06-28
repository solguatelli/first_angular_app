import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  datosCliente : any;

  constructor(private bikeService : BikeService, private route : ActivatedRoute) {
    
    this.bikeService.getBikeWithId(this.route.snapshot.params.id).subscribe(
      data => {this.datosCliente = data},
      error => {console.log(error)}
    )
   }

  ngOnInit(): void {
  }

}
