import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-carreer',
  templateUrl: './carreer.page.html',
  styleUrls: ['./carreer.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, RouterLink],
})
export class CarreerPage {}
