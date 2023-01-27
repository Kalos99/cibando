import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  ricetta: Recipe;
  percorsoStelline = "../../../../assets/images/difficolta-";

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.onGetRecipe();
  }

  //metodo recupero id da URL (versione 1)
  onGetRecipe(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));

    if(id){
      this.recipeService.getRecipe(id).subscribe({
        next: (res) => {
          this.ricetta = res;
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  // metodo recupero id da URL (versione 2)
  // onGetRecipe2(): void {
  //   this.activatedRoute.params.subscribe(
  //     (urlParams) => {
  //       const id = Number(urlParams['_id']);

  //       this.recipeService.getRecipe(id).subscribe({
  //         next: (res) => {
  //           this.ricetta = res;
  //         },
  //         error: (err) => {
  //           console.log(err)
  //         }
  //       })
  //     }
  //   )
  // }

}
