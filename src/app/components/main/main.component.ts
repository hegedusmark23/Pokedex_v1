import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  constructor(private http: HttpClient) { }
  apiService = inject(ApiService);
  numberOfPokemon: number = 20;

ngOnInit(): void {
   this.apiService.getApi();
}

addMorePokemon() {
  this.numberOfPokemon += 20;
  console.log(this.numberOfPokemon);
}
}
