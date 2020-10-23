import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class ServicosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicosProvider Provider');
  }

  urlImg = "https://testeezoom.000webhostapp.com/assets/images/";

  pegandoDados(){
    return this.http.get('https://testeezoom.000webhostapp.com/consulta.php').map((res:any) => {
      return res;
    });
  }

}
