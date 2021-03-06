import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string, oKCallback: () => any){
  alertify.confirm(message, function(e){
    if(e){
      oKCallback();
    }else{}
  });
}

success(message: string){
  alertify.success(message);
}

error(message: string){
  alertify.error(message);
}

warning(message: string){
  alertify.warning(message);
}

message(message: string){
  alertify.message(message);
}

}
