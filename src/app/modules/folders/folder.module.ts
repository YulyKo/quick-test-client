import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnumFilterPipeModule } from 'src/app/utils/EnumFilterPipe/EnumFiltePipe.module';
import { HttpHeadersService } from 'src/app/utils/HttpHeadersService/HttpHeaders.service';
import { QuestionModule } from '../questions/question.module';
import { TestModule } from '../test/test.module';
import { UIModule } from '../UI/ui.module';
import { FolderFilesListComponent } from './components/folder-items-list/folder-files-list.component';
import { FolderFileComponent } from './components/folder-items-list/folder-files/folder-file.component';
import { NewFolderFormComponent } from './components/new-folder-form/new-folder-form.component';
import { folderRoutes } from './folder.routing';
import { FileHTTPService } from './services/file.http.service';
import { FolderHttpService } from './services/folder.http.service';
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
    UIModule,
    TestModule,
    EnumFilterPipeModule,
    QuestionModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild(folderRoutes),
    CommonModule,
  ],
  providers: [
    FolderHttpService,
    FileHTTPService,
    SortFilesService,
    HttpHeadersService,
  ],
})
export class FolderModule {}
