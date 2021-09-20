import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsByCategoryComponent } from './blogs-by-category/blogs-by-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    // Empty path that will redirect to categories page.
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // Display home component of the blog
    path: 'home',
    component: HomeComponent
  },
  {
    // Displays list of blog categories
    path: 'categories',
    component: CategoriesComponent
  },
  {
    // Displays list of blogs with the selected category
    path: 'blogs-by-category',
    component: BlogsByCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
