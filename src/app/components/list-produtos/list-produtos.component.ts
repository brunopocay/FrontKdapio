import { Component, OnInit,Input } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';
import { Produtos } from '../produtos';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {
  
  @Input() IdCategoria: number;

  listProdutos: Produtos[] = [];

  constructor(private service: ComponentsService){}

  ngOnInit(): void {
    this.service.getProdutos(this.IdCategoria).subscribe((listProdutos) => {
      this.listProdutos = listProdutos;
  });
  }

}
