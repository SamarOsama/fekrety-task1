import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userscontainer:object[]=[]; // array (container to save data init)

  userdata = new FormGroup(
    {
      photo:new FormControl(''),
      fullname: new FormControl('', [Validators.required , Validators.minLength(5)]), //full name must be not less than 5 char.
      birthday: new FormControl('',[Validators.required, Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)] ),
      email: new FormControl('', [Validators.required,Validators.email]),
      phonenumber: new FormControl('', [Validators.required ,Validators.minLength(11),Validators.maxLength(11)]),
      address: new FormControl('',[Validators.required, Validators.pattern(/^\d+\s[A-z]+\s[A-z]+\s[A-z]+$/)]),
    }
    );
    // save the data in the local storage
    saveform()
    {
      let user =
      {
        name: this.userdata.controls.fullname.value,
        birthday: this.userdata.controls.birthday.value,
        email: this.userdata.controls.email.value,
        phonenumber: this.userdata.controls.phonenumber.value,
        address: this.userdata.controls.address.value,
      }
       //console.log(user);
      this.userscontainer.push(user) //to push the data in the container
      //localStorage.setItem("userdata" , JSON.stringify(this.userscontainer) ); //save in the local storage 
     
    }
 
  constructor() { }

  ngOnInit() {
  }

 

}
