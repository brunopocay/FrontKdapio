import { Injectable,Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  
  private readonly API = 'https://app.kdapio.com.br/api/store/votorella';

  constructor(private http: HttpClient) {}

  getApi(){
    return this.http.get(this.API)
  }

  getCategorias(){
    return this.http.get(this.API + '/categoria')
  }

  getProdutos(IdCategoria:number){
    return this.http.get(this.API + '/produto?$filter=CategoriaId eq '+IdCategoria.toString())
  }
}
