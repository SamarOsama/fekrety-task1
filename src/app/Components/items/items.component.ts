import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  newUsers: object[] = []


  constructor() {

    // for loop to make the array duplicate 200 times
    var i;
    for (i = 0; i < 200; i++) {
      var users: object = [];
      console.log(users);
      this.newUsers.push(users);

    }
  }




  ngOnInit() {


  }

  /*onScroll()
    {
     // console.log("hambouzooo");
    }
  */

}
