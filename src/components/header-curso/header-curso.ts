import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'header-curso',
  templateUrl: 'header-curso.html'
})
export class HeaderCursoComponent {

  @Input() titulo: string;
  @Input() subTitulo: string;
  @Input() botaoVoltar: string;
  @Input() urlImg: string;

  constructor(public navCtrl: NavController) { }

  voltar() {
    this.navCtrl.pop();
  }

}
