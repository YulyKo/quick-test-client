import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderService } from '../../folder.service';
import { File } from '../../models/File.class';

@Component({
  selector: 'app-folder-files-list',
  templateUrl: './folder-files-list.component.html',
  styleUrls: ['./folder-files-list.component.sass']
})
export class FolderFilesListComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private folderService: FolderService,
  ) { }

  id: string;
  files: Array<File>;

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;
    this.getFiles();
  }

  getFiles() {
    this.folderService.fetchFiles(this.id);
    setTimeout(() => {
      this.files = this.folderService.getCommonArrayOfFiles();
    }, 3000);
  }
}
