import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderService } from '../../folder.service';

@Component({
  selector: 'app-folder-items-list',
  templateUrl: './folder-items-list.component.html',
  styleUrls: ['./folder-items-list.component.sass']
})
export class FolderItemsListComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private folderService: FolderService,
  ) { }

  id: string;

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;
    // console.log('id', this.id);
    const res = this.folderService.getFolderItems(this.id);
    res.then(res => console.log(res));
    // console.log();
    
  }

}
