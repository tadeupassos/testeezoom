import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  curso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicos: ServicosProvider) {
    this.curso = navParams.get('curso');
    console.log("curso",this.curso);
    this.preparando();
  }

  ionViewDidLoad() {

  }

  preparando(){
    if(typeof this.curso.img_galeria === 'string'){
      this.curso.img_galeria = this.curso.img_galeria.split(",");
    }
  }

}
