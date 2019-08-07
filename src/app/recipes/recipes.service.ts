import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id : 'r1',
      title : 'Kacchi' ,
      // tslint:disable-next-line: max-line-length
      imageUrl : 'https://www.foodfusion.com/wp-content/uploads/2019/01/Kachay-Gosht-ki-Biryani-Recipe-by-Food-fusion-2.jpg' ,
      ingrediant : [
        'Rice' , 'Meat' , 'Achar'
      ]
    },
    {
      id : 'r2',
      title : 'Polao' ,
      // tslint:disable-next-line: max-line-length
      imageUrl : 'https://foodpeon.com/wp-content/uploads/2018/09/received_260107814629898.jpeg' ,
      ingrediant : [
        'Rice' , 'Chiken' , 'Kabab'
      ]
    }
  ] ;

  constructor() { }

  public getAllRecipes() {
    return [...this.recipes];
  }

  public getRecipe(recipeId) {
     return { ... this.recipes.find( recipe => {
        return recipe.id === recipeId;
      })};
  }

  public deleteRecipe(recipeId){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });

  }
}
