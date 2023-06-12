import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    photo(): string{
      return `https://kdapio.com.br/votorella/fundo.jpg`
    } 
    
    constructor() {
      
    }
}
