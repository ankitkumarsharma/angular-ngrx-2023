import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-account-dashboard',
  templateUrl: './user-account-dashboard.component.html',
  styleUrls: ['./user-account-dashboard.component.scss']
})
export class UserAccountDashboardComponent implements OnInit {
  finalUrl:any;
  endUrl:any;
  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
    this.activatedRoute.url.subscribe((data:any)=>{
      this.endUrl = data[1]['path'];
      console.log(this.endUrl)
    })
  }

  ngOnInit(): void {
    this.finalUrl = this.router.url.split('')[1];
    console.log(this.finalUrl)
  }

}
