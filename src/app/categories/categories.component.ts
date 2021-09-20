import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

interface Categories {
  name: String;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  public categories: Categories[] = [];
  constructor(private mainService: MainService) { }


  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.mainService.getAllCategories().subscribe((listCategories: any) => this.categories.push(...listCategories));
  }
}
