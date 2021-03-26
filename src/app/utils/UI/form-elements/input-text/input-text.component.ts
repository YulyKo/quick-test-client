import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.sass']
})
export class InputTextComponent implements OnInit {
  labelText = 'Тут текст із parent form';

  @Input()
  elementID: string;

  constructor() {}

  ngOnInit(): void {}

}
