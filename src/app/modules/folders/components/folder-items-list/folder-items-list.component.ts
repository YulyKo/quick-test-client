import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder-items-list',
  templateUrl: './folder-items-list.component.html',
  styleUrls: ['./folder-items-list.component.sass']
})
export class FolderItemsListComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  id: string | number;

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;
    console.log('id', this.id);
  }

}
