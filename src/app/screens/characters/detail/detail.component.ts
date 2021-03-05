import { Component, OnInit } from '@angular/core';
import {CharactersApiService} from '../../../services/http/characters-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  constructor(
    private charactersApiService: CharactersApiService,
    private route: ActivatedRoute
  ) { }

  dataCharacter: any;
  isLoading = false;

  ngOnInit(): void {

    if (this.route.snapshot.params.id) {
      this.loadItem(this.route.snapshot.params.id);
    }
  }

  loadItem(id: string) {
    this.isLoading = true;
    this.charactersApiService.getDataCharacter(id).then((response) => {
      console.log(response.data.results);

      this.dataCharacter = response.data.results[0];

      this.isLoading = false;
    });
  }

}
