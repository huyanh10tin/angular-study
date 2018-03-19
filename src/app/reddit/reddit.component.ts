import { Component, OnInit } from '@angular/core';
import {Article} from '../article/article.model';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent {
  title = 'app';
  articles: Article[];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article( title.value, link.value, 0));
    title.value = '';
    link.value = '';
    // console.log(`Adding article title:${title.value}and link:${link.value}`);
    return false;
  }

  constructor() {
    this.articles = [new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
