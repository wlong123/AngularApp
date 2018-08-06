import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';

  viewChange(selected: string) {
    this.loadedFeature = selected;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC48Cw8K_AjJnurkRUFCyjGIwuYOvVlfz4',
      authDomain: 'angular-recipe-book-aa620.firebaseapp.com',
      databaseURL: 'https://angular-recipe-book-aa620.firebaseio.com',
      projectId: 'angular-recipe-book-aa620',
      storageBucket: 'angular-recipe-book-aa620.appspot.com',
      messagingSenderId: '855701757874'
    });
  }
}
