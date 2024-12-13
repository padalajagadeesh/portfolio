import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService } from '../table.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userForm!: FormGroup
  userForm2!: FormGroup
  items!: FormArray;
  value: boolean = false;
  updateData: any = []
  getData: any;
  constructor(private fb: FormBuilder, private tableServie: TableService, private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.userForm = this.fb.group({
      fName: ['', Validators.required],
      LName: ['', Validators.required],
      email: ['', Validators.required],
      cEmail: ['', Validators.required]
    })
    this.userForm2 = this.fb.group({
      ufName: ['', Validators.required],
      uLName: ['', Validators.required],
      items: this.fb.array([])
    })
    console.log(this.userForm2, '5555')
    this.getData = this.tableServie.returnData()
    console.log(this.getData, '33333')
    if (this.getData) {
      // this.userForm.controls['fName'].setValue(this.getData.fName)
      // this.userForm.controls['LName'].setValue(this.getData.LName)
      // this.userForm.controls['email'].setValue(this.getData.email)
      // this.userForm.controls['cEmail'].setValue(this.getData.cEmail)
      this.userForm.patchValue({
        fName: this.getData.items.fName,
        LName: this.getData.items.LName,
        email: this.getData.items.email,
        cEmail: this.getData.items.cEmail,
      })
    }
  }
  formSubmit(): void {
    if (this.userForm.invalid) {
      console.log(this.userForm, '4444')
      // Mark all controls as touched to trigger error messages
      this.userForm.markAllAsTouched();
    } else {
      console.log('767676')
      // Handle valid form submission
      this.updateData.push(this.userForm.value)
      this.tableServie.data(this.userForm.value)
      this.router.navigate(['/table']);
      console.log(this.updateData, 'Form Submitted:', this.userForm.value);
      // this.http.
    }
  }
  name() {
    console.log(this.userForm.controls['fName'].value === '123', '00909')
    if (this.userForm.controls['fName'].value === '123') {
      this.value = true
      this.userForm.get('LName')?.disable();
    } else {
      this.value = false
      this.userForm.get('LName')?.enable();
    }
  }
  get hobbies(): FormArray {
    return this.userForm2.get('items') as FormArray;
  }

  addHobby(): void {
    this.hobbies.push(this.fb.control('', Validators.required));
  }

  removeHobby(index: number): void {
    this.hobbies.removeAt(index);
  }
  update() {
    // let data = this.tableServie.updateData()
    console.log(this.getData, '9999')
    // const newData = data[this.getData.index]
    // this.tableServie.data(newData)
    this.router.navigate(['/table']);
  }
}
