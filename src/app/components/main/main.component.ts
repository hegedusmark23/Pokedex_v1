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

ngOnInit(): void {
   this.apiService.getApi();
}

addMorePokemon() {
  this.apiService.numberOfPokemon += 20;
  console.log(this.apiService.numberOfPokemon);
  this.apiService.getApi();
}
}
