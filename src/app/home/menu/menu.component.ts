import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../constants/product';
import { RouterModule, Router } from '@angular/router';
import { AppIconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, AppIconComponent,

  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.featuredProducts = PRODUCTS.slice(0, 3);
  }

}