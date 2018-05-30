import { Component, OnInit, Input } from "@angular/core";
import { Game } from "../model/game.model";
import { SearchService } from "../services/search.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-searchresult",
  templateUrl: "./searchresult.component.html",
  styleUrls: ["./searchresult.component.css"]
})
export class SearchresultComponent {
  gameId: number;
  gameName: string;
  gameType: string;
  gameImage: string;
  gameDescription: string;
  gameRules: string;

  @Input() hero: Object;

  constructor(private route: ActivatedRoute, private service: SearchService) {}

  ngOnInit(): void {
    this.service
      .searchHeroes(this.route.snapshot.paramMap.get("name"))
      .subscribe(hero => (this.hero = hero));
  }
}