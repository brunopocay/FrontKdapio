import { Injectable,Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../components/produtos';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  
  private readonly API = 'https://app.kdapio.com.br/api/store/votorella';

  constructor(private http: HttpClient) {}

  getApi(){
    return this.http.get<Produtos[]>(this.API)
  }

  getCategorias(){
    return this.http.get<Produtos[]>(this.API + '/categoria')
  }

  getProdutos(IdCategoria:number){
    return this.http.get<Produtos[]>(this.API + '/produto?$filter=CategoriaId eq '+IdCategoria.toString())
  }
}
