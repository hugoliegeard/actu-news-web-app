import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title: string = 'Actunews';

  posts = [
    {'title': 'Titre 1'},
    {'title': 'Titre 2'},
    {'title': 'Titre 3'},
    {'title': 'Titre 4'},
  ]

}
