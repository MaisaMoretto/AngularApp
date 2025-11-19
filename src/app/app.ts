import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularApp');
  public items = [
    { title: 'MENU 1', id: 1 },
    { title: 'MENU 2', id: 2 },
    { title: 'MENU 3', id: 3 }
  ];
  public itemAtual = 1;
}
