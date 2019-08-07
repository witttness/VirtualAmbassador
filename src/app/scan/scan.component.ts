import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { MyService } from '../my.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  scannerOn: boolean = false;
  lightOn: boolean = false;
  allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX
  ];

  constructor(private router: Router, private svc: MyService) { }

  ngOnInit() {
    this.scannerOn = true;
  }

  ngOnDestroy() {
    this.lightOn = false;
    this.scannerOn = false;
  }

  onTorchCompatible(e) {
    console.info("torchCompatible", e);
    setTimeout(() => {
      if (this.scannerOn)
        this.lightOn = true;
    }, 500);
  }

  scanSuccess(data: string) {
    console.info("SCAN", data);
    if (data == 'SCARCITY' || data == 'DECIDE') {
      this.svc.visitExhibit(data);
      this.router.navigateByUrl(`/exh-${data}`);
    } else {
      console.error(`Unexpected scan data: ${data}`);

      //REMOVE THIS:
      //this.router.navigateByUrl(`/exhibit/ex1`);
    }
  }
}
