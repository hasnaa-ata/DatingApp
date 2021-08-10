import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private aletify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.aletify.success('Logged in sucessfully');
    }, error =>{
      this.aletify.error(error);
    }, () =>{
      this.router.navigate(['/members']);
    });
  }

  loggedIn(){
    return this.authService.loggedin();
  }

  logout(){
    localStorage.removeItem('token');
    this.aletify.message('logged out');
    this.router.navigate(['/home']);
  }

}
