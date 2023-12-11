import { Component, OnInit } from '@angular/core';


import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})

export class ScanPage implements OnInit {
  showScanner: boolean = false;
  scanResult: string = '';

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {}

  onCodeResult(result: string) {
    this.scanResult = result;
  }

  startScanner() {
    this.showScanner = true;
  }

  toggleScanner() {
    this.showScanner = !this.showScanner;
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
