import { Component, Input, OnInit } from '@angular/core';
import { FileTypes } from '../../../models/FileTypes.enum';

@Component({
  selector: 'app-folder-file',
  templateUrl: './folder-file.component.html',
  styleUrls: ['./folder-file.component.sass']
})
export class FolderFileComponent implements OnInit {

  constructor() { }

  @Input() iconType: FileTypes;

  @Input() fileId: string;

  @Input() fileName: string;

  ngOnInit(): void {}

  generateIconUrl() {
    return `../../../../../../assets/${this.iconType}-icon.png`
  }
}
