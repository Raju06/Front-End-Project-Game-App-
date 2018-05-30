import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Game } from '../model/game.model';
import { Router, ExtraOptions } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, merge, filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  games: Game[];
  gameId: number;
  gameName: string = '';
  gameType: string = '';
  gameImage: string = '';
  gameDescription: string;
  searchTerm: FormControl = new FormControl();

  searchResult: any;

  constructor(private restService: SearchService, private router: Router) {
    this.searchTerm.
      valueChanges
      .debounceTime(400)
      .subscribe(data => {
        this.restService.searchHeroes(data).subscribe(data => {
          this.searchResult = data;
          console.log(this.searchResult);
          sessionStorage.setItem('searchdata', this.searchResult);
        })
      });
  }

  ngOnInit() { }

}
