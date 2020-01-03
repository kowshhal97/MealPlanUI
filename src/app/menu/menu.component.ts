import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private data: DataService,private router: Router) { }
num:any = null;
message:string;

  ngOnInit() {

    this.data.currentMessage.subscribe(message => this.message = message)
    this.num=sessionStorage.getItem('value')
  }

    
  maxNo = false;
  amt:any = 0;

  onChange(isChecked: boolean) {
    if (isChecked)
      this.amt++
    else 
      this.amt--
    this.amt === Number(this.num) ? this.maxNo = true : this.maxNo = false;
  }

  checkBox = [
    { name: 'Meal1', checked: false,src:"http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" },
    { name: 'Meal2', checked: false,src:"http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-6.jpg" },
    { name: 'Meal3', checked: false,src:"http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-5.jpg"},
    { name: 'Meal4', checked: false,src:"http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" },
    { name: 'Meal5', checked: false,src:"http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" },
    { name: 'Meal6', checked: false,src:"http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" },
    { name: 'Meal7', checked: false,src:"http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" },
    { name: 'Meal8', checked: false,src:"http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg"},
    { name: 'Meal9', checked: false,src:"http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-1.jpg"} 
    ];

    proceed() {
      this.router.navigate(['./payment'])
    }

}
