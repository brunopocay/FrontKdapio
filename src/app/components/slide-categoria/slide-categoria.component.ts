import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-slide-categoria',
  templateUrl: './slide-categoria.component.html',
  styleUrls: ['./slide-categoria.component.css']
})
export class SlideCategoriaComponent implements OnInit {

  listCategorias: any;

  constructor(private service: ComponentsService){}

  ngOnInit(): void {
    this.service.getCategorias().subscribe((listCategorias) => {
        this.listCategorias = listCategorias;
    })    
  }

  scrollToDiv(divId:string) {  
      var element = document.getElementById('categoria_'+divId);
      console.log(divId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }  
}