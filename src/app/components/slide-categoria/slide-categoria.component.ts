import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';
import { Produtos } from '../produtos';

@Component({
  selector: 'app-slide-categoria',
  templateUrl: './slide-categoria.component.html',
  styleUrls: ['./slide-categoria.component.css']
})
export class SlideCategoriaComponent implements OnInit {

  listCategorias: Produtos[] = [];

  constructor(private service: ComponentsService){}

  ngOnInit(): void {
    this.service.getCategorias().subscribe((listCategorias) => {
        this.listCategorias = listCategorias;
    })    
  }

  scrollToDiv(divId:string) {  
      const element = document.getElementById('categoria_' + divId);      
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }  
}