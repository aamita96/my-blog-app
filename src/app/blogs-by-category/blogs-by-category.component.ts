import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

interface Blog {
  title: String;
  description: String;
  keywords: String;
  meta_desc: String;
  category: String;
}

@Component({
  selector: 'app-blogs-by-category',
  templateUrl: './blogs-by-category.component.html',
  styleUrls: ['./blogs-by-category.component.css']
})
export class BlogsByCategoryComponent implements OnInit {
  public blogs: Blog[] = [];
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    const selectedCategory = history.state.name // Here we got our selected category object and we pick the name of the category.
    console.log('Data passed is-', history.state)
    this.getBlogsByCategory(selectedCategory);
  }

  getBlogsByCategory(category: string) {
    this.mainService.getBlogByCategory()
      .subscribe((blogs: Blog[]) => {
        this.blogs.push(...blogs.filter(blog => blog.category === category)); // Filter based on selected category.
      });
  }

}
