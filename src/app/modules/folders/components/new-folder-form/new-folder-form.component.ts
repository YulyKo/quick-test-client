import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROOT_FOLDER_NAME } from 'src/app/utils/defaultNames.consts';

@Component({
  selector: 'app-new-folder-form',
  templateUrl: './new-folder-form.component.html',
  styleUrls: ['./new-folder-form.component.sass']
})
export class NewFolderFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeForm():void {
    console.log('click');
    this.router.navigate(['/home/', ROOT_FOLDER_NAME]);
  }

}
