import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cursos: any[];
  mostrarBotao: boolean;
  loading: any;

  constructor(public navCtrl: NavController, public servicos: ServicosProvider, public loadingCtrl: LoadingController) {
    this.mostrarBotao = true;

    this.aguardar();
    this.servicos.pegandoDados()
     .toPromise()
     .then(dados => {
      this.cursos = dados;
      console.log("this.cursos",this.cursos);
      this.loading.dismiss();
    });
  }

  detalhe(item: any){
    this.navCtrl.push(DetalhePage, {
      curso: item
    });
  }

  aguardar() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor, guarde...'
    });

    this.loading.present();
  }

}
