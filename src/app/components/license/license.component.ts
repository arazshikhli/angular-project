import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToRegistration() {
    this.route.navigate(['/registration'])
  }
}
