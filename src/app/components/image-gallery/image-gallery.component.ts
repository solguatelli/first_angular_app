import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  bikes_row1: any = [{
    id : 1,
    img_url : "../../../assets/img/bikes/bike1.webp",
    name : "Marlin 8"
  },
  {
    id : 2,
    img_url : "../../../assets/img/bikes/bike2.webp",
    name : "Supercaliber 9.7"
  },
  {
    id : 3,
    img_url : "../../../assets/img/bikes/bike3.webp",
    name : "Procaliber 9.6"
  }
]

bikes_row2 : any = [{
  id : 4,
  img_url : "../../../assets/img/bikes/bike4.webp",
  name : "Session 9 X01"
},
{
  id : 5,
  img_url : "../../../assets/img/bikes/bike5.webp",
  name : "Remedy 9.8"
},
{
  id : 6,
  img_url : "../../../assets/img/bikes/bike6.webp",
  name : "Marlin 5"
}
]

  constructor() { }

  ngOnInit(): void {
  }

}
