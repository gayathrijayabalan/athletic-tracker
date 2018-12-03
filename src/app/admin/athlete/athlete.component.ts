import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  thirdFormGroup:FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      emailCtrl: ['',Validators.required],
      phCtrl: ['',Validators.required],
      dobCtrl: ['',Validators.required],
      clCtrl: ['',Validators.required],
      ageCtrl: ['',Validators.required],
    });
   
    this.secondFormGroup = this._formBuilder.group({
      yearCtrl: ['', Validators.required],
      bgCtrl: ['', Validators.required],
      hgtCtrl: ['', Validators.required],
      wtCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    
   
  }
}