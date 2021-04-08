import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { folderRoutes } from "./folder.routing";

@NgModule({
  imports: [RouterModule.forChild(folderRoutes)],
})
export class FolderModel {}
