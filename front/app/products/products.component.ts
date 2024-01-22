// mobiles.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Products[] = [
    { brand: 'lakme', model: 'kajal', price: 999.99 },
    { brand: 'dazlar', model: 'lipstick', price: 1299.99 },
    // Add more mobiles as needed
  ];
}

interface Products {
  brand: string;
  model: string;
  price: number;
}
