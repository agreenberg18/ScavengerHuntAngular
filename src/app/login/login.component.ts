import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) { 
      this.af.auth.subscribe(auth =>{
      if(auth){
      this.router.navigateByUrl('/members');
    }
  })
  }


  ngOnInit() {
  }

}
