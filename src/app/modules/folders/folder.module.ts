import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionModule } from '../questions/question.module';
import { FolderFilesListComponent } from './components/folder-items-list/folder-files-list.component';
import { FolderFileComponent } from './components/folder-items-list/folder-files/folder-file.component';
import { NewFolderFormComponent } from './components/new-folder-form/new-folder-form.component';
import { folderRoutes } from './folder.routing';
import { FolderHTTPService } from './services/folder.http.service';
import { SortFilesService } from './services/sortFiles.service';
import { FolderView } from './views/folder-view/folder.view';

@NgModule({
  declarations: [
    FolderView,
    FolderFileComponent,
    FolderFilesListComponent,
    NewFolderFormComponent,
  ],
  imports: [
    QuestionModule,
    CommonModule,
    RouterModule,
    RouterModule.forChild(folderRoutes),
  ],
  providers: [
    FolderHTTPService,
    SortFilesService,
  ],
})
export class FolderModule {}
