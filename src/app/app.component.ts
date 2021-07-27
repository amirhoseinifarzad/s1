import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string;
  includeLetter: boolean = false;
  includeNumber: boolean = false;
  includeSymbol: boolean = false;
  char :number = 0

  constructor() {
    this.password = '';
  }

  onChngeLetter() {
    this.includeLetter = !this.includeLetter;
  }

  onChngeNumber() {
    this.includeNumber = !this.includeNumber;
  }

  onChngeSeymbol() {
    this.includeSymbol = !this.includeSymbol;
  }

  getpass() {
    return this.password;
  }
  onChange(value : string ){

    const parse =parseInt(value);
    if(!isNaN(parse)){
      this.char =parse
    }




  }
  g1() {
    const leter = 'abcdefghijklmnopqrstuvwxyz';
    const number = '1234567890';
    const seymbol = '!"£$%&/()=?^ç@#';
    let pass = ''
    let generatPass = ''
    
    
    if (this.includeLetter) {

      pass += leter

    }

    if(this.includeNumber){
      pass += number
    }

    if(this.includeSymbol){
      pass += seymbol
    }


    for (let i = 0; i < this.char; i++) {

      let index = Math.floor(Math.random()*pass.length);

      generatPass += pass[index]


      
      
    }

    this.password= generatPass ;
    

   
  }
}
