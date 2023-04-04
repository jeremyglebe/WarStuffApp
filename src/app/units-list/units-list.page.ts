import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  AlertController,
  IonicModule,
  ModalController,
  NavController,
} from '@ionic/angular';
import { Unit } from '../data/models';
import { UnitService } from '../services/unit.service';
import { ViewUnitPage } from '../view-unit/view-unit.page';

@Component({
  selector: 'app-units-list',
  templateUrl: 'units-list.page.html',
  styleUrls: ['units-list.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule],
})
export class UnitsListPage implements OnInit {
  units: Unit[] = []; // Array to store the list of units

  constructor(
    private navCtrl: NavController,
    public unitService: UnitService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    await this.unitService.initialize();
    this.units = this.unitService.getUnits();
  }

  async viewUnit(unit: Unit) {
    const modal = await this.modalController.create({
      component: ViewUnitPage,
      componentProps: { unit },
    });

    await modal.present();
  }

  createUnit() {
    this.navCtrl.navigateForward('/unit-creation');
  }

  async removeUnit(unit: Unit) {
    const alert = await this.alertController.create({
      header: 'Remove Unit',
      message: 'Are you sure you want to remove this unit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Remove',
          handler: () => {
            this.unitService.removeUnit(unit);
            this.units = this.unitService.getUnits();
          },
        },
      ],
    });

    await alert.present();
  }

  navigateToWarbandsList() {
    this.navCtrl.navigateForward('/warbands-list');
  }
}