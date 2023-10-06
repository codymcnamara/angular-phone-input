import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-phone-input';

  phone = new FormControl('');

  handleChange(event: any){
    if (typeof this.phone.value === 'string' ){
      let justNumString = '';
      if ( this.phone.value.match(/\d+/g) !== null ) {
        let justNumsArr = this.phone.value.match(/\d+/g);
        if(Array.isArray(justNumsArr)){
          justNumString = justNumsArr.join('');
        }
      }

      if(justNumString.length >= 3 && justNumString.length < 6){
        this.phone.setValue('(' + justNumString.slice(0,3) + ') ' + justNumString.slice(3,justNumString.length));
      } else if (justNumString.length >= 6){
        this.phone.setValue('(' + justNumString.slice(0,3) + ') ' + justNumString.slice(3, 6) + '-' + justNumString.slice(6,10));
      }

    }

  }
}
