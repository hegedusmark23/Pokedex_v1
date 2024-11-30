import { Component } from '@angular/core';
import { MainComponent } from "../components/main/main.component";
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [MainComponent, HeaderComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

}
