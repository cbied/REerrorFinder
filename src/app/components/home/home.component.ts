import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(1500)
      ]),
      transition(':leave',
        animate(500, style({opacity: 0})))
    ])
  ],
})
export class HomeComponent {
  public isShown = true;
}



