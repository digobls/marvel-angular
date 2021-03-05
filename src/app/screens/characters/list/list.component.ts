import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from 'src/app/services/http/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private charactersApiService: CharactersApiService) { }

  listCharacters = [];
  isLoading = false;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.isLoading = true;
    this.charactersApiService.getAllCharacters().then((response) => {
      console.log(response.data.results);

      this.listCharacters = response.data.results;

      this.isLoading = false;
    });
  }
}
