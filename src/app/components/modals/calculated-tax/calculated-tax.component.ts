import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-calculated-tax',
  templateUrl: './calculated-tax.component.html',
  styleUrls: ['./calculated-tax.component.css']
})
export class CalculatedTaxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

  ngOnInit(): void {
    alert(this.data.name);
  }

}
