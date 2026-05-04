import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.page.html',
  styleUrls: ['./benefits.page.scss'],
  standalone: true,
  imports: [IonContent],
})
export class BenefitsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
