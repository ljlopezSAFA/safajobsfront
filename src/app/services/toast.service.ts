import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async presentToast(message: string, type: 'success' | 'error' | 'warning' = 'success') {
    const colors = {
      success: 'principal',
      error: 'danger',
      warning: 'warning'
    };

    const emojis = {
      success: '✅',
      error: '❌',
      warning: '⚠️'
    };

    const  duration: number = 1500;

    const toast = await this.toastController.create({
      message: `${emojis[type]} ${message}`,
      duration,
      position: 'top',
      color: colors[type] || 'primary', // Usa un color predeterminado si no se reconoce el tipo
    });

    await toast.present();
  }
}
