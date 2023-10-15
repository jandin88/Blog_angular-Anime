import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../data/dataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()

  articles: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.articles = this.dataService.getAllArticles();

  }
}
