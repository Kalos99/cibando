import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  nome: string;
  email: string;
  ricette: Recipe[];
  evidenziato = false;

  onEvidenziato() {
    this.evidenziato = !this.evidenziato;
  }

  constructor(private recipeService: RecipeService, private userService:UserService){ }

  ngOnInit(): void {
    this.userService.datiUtente.subscribe((res: any) => {
      localStorage.setItem('nome', res.nome);
      localStorage.setItem('email', res.email);
    });

    if(localStorage.getItem('nome')){
      this.nome = localStorage.getItem('nome');
      this.email = localStorage.getItem('email');
    }
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
        this.ricette = this.ricette.sort((a,b) => b._id - a._id).slice(0,4);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  closeModal(){
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    localStorage.clear();

    this.nome = '';
    this.email = '';
  }

}
