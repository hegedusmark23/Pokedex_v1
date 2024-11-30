import { Component, inject } from '@angular/core';
import { MainComponent } from "../components/main/main.component";
import { HeaderComponent } from "../components/header/header.component";
import { ApiService } from '../services/api.service';
import { LoadingScreenComponent } from '../components/loading-screen/loading-screen.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [MainComponent, HeaderComponent, LoadingScreenComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
apiService = inject(ApiService)
}
