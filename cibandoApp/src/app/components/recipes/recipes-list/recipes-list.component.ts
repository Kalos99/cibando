import { RecipeService } from './../../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{
  ricette: Recipe[];

  constructor(private recipeService: RecipeService){ }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (ricette) => {
        this.ricette = ricette;
      },
      error: (errore) => {
        console.log(errore);
      }
    })
  }
}
