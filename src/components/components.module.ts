import { NgModule } from '@angular/core';
import { HeaderCursoComponent } from './header-curso/header-curso';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [HeaderCursoComponent],
	imports: [IonicModule],
	exports: [HeaderCursoComponent]
})
export class ComponentsModule {}
