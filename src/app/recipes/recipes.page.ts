import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [] ;
  constructor( private  recipesServices: RecipesService) {

  }

  ngOnInit() {

    this.recipes = this.recipesServices.getAllRecipes();
  }

}
