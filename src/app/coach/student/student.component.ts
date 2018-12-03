import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  sno: number;
  phonenumber: number;
  email: any;
  button:any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {sno: 1, name: 'Swathi', phonenumber: 66554223,email: 'sa@gmail.com',button:''},
  {sno: 2, name: 'Sindhu', phonenumber: 66554223, email: 'sa@gmail.com',button:''},
  {sno: 3, name: 'Gayu', phonenumber: 665542233, email: 'sa@gmail.com',button:''},
  {sno: 4, name: 'Deepa', phonenumber: 66554223,email: 'sa@gmail.com',button:''},
  {sno: 5, name: 'Mary', phonenumber: 66554223, email: 'sa@gmail.com',button:''},
  {sno: 6, name: 'Priya', phonenumber: 66554223, email: 'sa@gmail.com',button:''},
  {sno: 7, name: 'Lavi', phonenumber: 66554223,email: 'sa@gmail.com',button:''},
  {sno: 8, name: 'Prabha',phonenumber: 66554223, email: 'sa@gmail.com',button:''},
  {sno: 9, name: 'Arthi', phonenumber: 66554223, email: 'sa@gmail.com',button:''},
  {sno: 10, name: 'Revathi', phonenumber: 66554223, email: 'sa@gmail.com',button:''},

];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'name', 'phonenumber', 'email','button'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  }

}