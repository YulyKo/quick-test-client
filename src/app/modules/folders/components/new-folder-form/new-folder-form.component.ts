import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DEFAULT_FOLDER_NAME, ROOT_FOLDER_NAME } from 'src/app/utils/defaultNames.consts';

@Component({
  selector: 'app-new-folder-form',
  templateUrl: './new-folder-form.component.html',
  styleUrls: ['./new-folder-form.component.sass']
})
export class NewFolderFormComponent implements OnInit {

  form: FormGroup;

  colors = ['#333', '#33f'];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        name: [DEFAULT_FOLDER_NAME, []],
        color: '',
      });
    }

  ngOnInit(): void {}

  closeForm(): void {
    console.log('click');
    this.router.navigate(['/home/', ROOT_FOLDER_NAME]);
  }

  onSubmit(): void {
    this.closeForm();
    console.log(this.form.value);
  }
}
