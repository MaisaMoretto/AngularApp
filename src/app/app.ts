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
    { title: 'Visão Geral', id: 1 },
    { title: 'Por que Angular?', id: 2 },
    { title: 'Componentes', id: 3 },
    { title: 'TypeScript', id: 4 },
    { title: 'Performance & Ferramentas', id: 5 },
    { title: 'Angular x Outros', id: 6 }
  ];
  public itemAtual = 1;
}
