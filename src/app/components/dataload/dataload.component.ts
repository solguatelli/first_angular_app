import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-dataload',
  templateUrl: './dataload.component.html',
  styleUrls: ['./dataload.component.css']
})
export class DataloadComponent implements OnInit {
//atributo de la clase
models: string []=[
  'Marlin 8 - Trek',
  'F Si Carbon 2 - Connondale',
  'PROCESS X DL - Kona',
  'NINETY-SIX RC 9000 - Merida',
  'METHANOL CV FS - Bianchi',
  'LAUFEY H LTD - Orbea'
];
bikeform: FormGroup;
validMessage: string= "";

  constructor(private bikeService : BikeService) {
    this.bikeform = new FormGroup({
      //@BrendaAutolitano
      name: new FormControl('',[Validators.required ,Validators.pattern('@([A-Za-z0-9_]{1,15})')]),
      email: new FormControl('',Validators.email),
      //validamos mediante una RegExp (Regular Expression)
      //el formato que deberia aceptar el input es el siguiente +54 3222 1522508956
      phone: new FormControl('',[Validators.required ,Validators.pattern('\\+54\\s[0-9]{1,4}\\s15[0-9]{8}')]),
      model: new FormControl('',Validators.required),
      serialNumber: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      //30-12-2021
      purchaseDate: new FormControl('',[Validators.required ,Validators.pattern('(([1-2][0-9])|([1-9])|(3[0-1]))-((1[0-2])|([1-9]))-[0-9]{4}')]),
      contact: new FormControl('',Validators.required),

    });
  }

  ngOnInit(): void {
    console.log("ngOnInit : ");
    console.log("Que tiene un FormGroup en su interior ?? ");
    console.log(this.bikeform);
  }

  //creamos un getters para acceder a los controles del formGroup desde el html
  get controles(){
    return this.bikeform.controls;
  }

  submitRegistration(){
    console.log("Valores en el formulario enviados al backend: ");
    console.log(this.bikeform.value);
    console.log("el formulario es valido ? " + this.bikeform.valid);
    if(this.bikeform.valid){

      // POST REQUEST
      this.bikeService.createdBikeRegistration(this.bikeform.value).subscribe( 
        data => {
          this.validMessage = "Su Formulario Se Envio Con Exito";
          this.bikeform.reset();
        },
        error => {
          this.validMessage = "Su registro no pudo ser enviado. Intente más tarde";
          console.log(error);
        }
      );
    }else{
      this.validMessage = "Su Formulario Esta Incompleto";
    }
  }

}