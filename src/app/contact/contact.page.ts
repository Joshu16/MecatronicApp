import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, NgIf],
})
export class ContactPage {
  statusMessage = '';
  isError = false;

  async sendEmail(name: string, email: string, message: string): Promise<void> {
    if (!name.trim() || !email.trim() || !message.trim()) {
      this.isError = true;
      this.statusMessage = 'Completa nombre, correo y mensaje.';
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/quiz11181@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'Nuevo mensaje desde Contacto Mecatrónica',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar');
      }

      this.isError = false;
      this.statusMessage = 'Mensaje enviado. Revisa quiz11181@gmail.com.';
    } catch {
      this.isError = true;
      this.statusMessage = 'No se pudo enviar el mensaje. Intenta de nuevo.';
    }
  }
}
