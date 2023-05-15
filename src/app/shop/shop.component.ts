import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  
// items: any;

items = [
  {
  imgSrc: "working on image display", 
  title: "productTitle1", 
  name:'productname1', 
  description: "a description of the item"
},

{
  imgSrc: "(2)working on image display", 
  title: "(2)productTitle1", 
  name:'(2)productname1', 
  description: "(2)a description of the item"
},

{
  imgSrc: "working on image display", 
  title: "productTitle1", 
  name:'productname1', 
  description: "a description of the item"
},
];

}
