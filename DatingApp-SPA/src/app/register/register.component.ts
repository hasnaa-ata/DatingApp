import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new Subject();
  model: any = {};

  constructor(private authService: AuthService, private aletify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
      this.aletify.success('Registeation successful');
    }, error => {
      this.aletify.error(error);
    });
  }

  cancel(){
    this.cancelRegister.next(false);
  }

}
