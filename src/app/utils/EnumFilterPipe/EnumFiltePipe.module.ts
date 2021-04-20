import { NgModule } from "@angular/core";
import { EnumFilter } from "./EnumFiltePipe.pipe";

@NgModule({
  declarations: [EnumFilter],
  exports: [EnumFilter],
})
export class EnumFilterPipeModule {}
