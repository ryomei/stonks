import { NgModule } from '@angular/core';
import { AtomsComponent } from './atoms.component';
import { BtnCallToActionComponent } from './btn-call-to-action/btn-call-to-action.component';



@NgModule({
  declarations: [AtomsComponent, BtnCallToActionComponent],
  imports: [
  ],
  exports: [AtomsComponent, BtnCallToActionComponent]
})
export class AtomsModule { }
