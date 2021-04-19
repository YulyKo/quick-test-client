import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderHTTPService } from '../../services/folder.http.service';
import { File } from '../../models/File.class';
import { SortFilesService } from '../../services/sortFiles.service';

@Component({
  selector: 'app-folder-files-list',
  templateUrl: './folder-files-list.component.html',
  styleUrls: ['./folder-files-list.component.sass']
})
export class FolderFilesListComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private folderService: FolderHTTPService,
    private folderSortService: SortFilesService,
  ) { }

  id: string;
  files: Array<File>;

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;
    this.getFiles();
  }

  getFiles(): void {
    this.folderService.fetchFiles(this.id);
    setTimeout(() => {
      const filesArray = this.folderService.getCommonArrayOfFiles();
      this.files = this.folderSortService.sortFromNewToOld(filesArray);
    }, 3000);
  }
}