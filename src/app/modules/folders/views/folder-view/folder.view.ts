import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patterns } from 'src/app/utils/Patterns.enum';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.view.html',
  styleUrls: ['./folder.view.sass']
})
export class FolderView implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    console.log(Patterns.FOLDER_NAME_PATTERN);
  }

}
