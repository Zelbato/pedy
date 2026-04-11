import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../core/models/product.model';
import { PRODUCTS } from '../../../../core/constants/product';
import { RouterModule, Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, LucideAngularModule,

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
