import {Component, Input, OnInit} from '@angular/core';
import {DrugService} from "../../services/drug.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {


  constructor(public drug:DrugService) { }

  ngOnInit(): void {
  }

}
