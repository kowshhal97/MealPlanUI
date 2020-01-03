import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../data.service";


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private router: Router,private data: DataService) { }
value:any
  ngOnInit() {
  }

  

  hwacw(value){
    sessionStorage.setItem('value',this.value[0]);
    sessionStorage.setItem('price',this.value[1]+this.value[2])

    
    this.router.navigate(['./menu']);

  }
}
