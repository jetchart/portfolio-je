import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formdata: FormGroup;
  public sended: boolean = false;

  constructor() { }

  ngOnInit() {
    this._initForm();
  }

  onSubmit() {
    this.sended = true;
    this.formdata.reset();
  }

  private _initForm() {
    this.formdata = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      phone: new FormControl(''),
      message: new FormControl('')
    });
  }

}
