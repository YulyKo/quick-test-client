import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {}

  isOpen: boolean = false;

  changeMenuVisibility(): void {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu(): void {
    document.getElementById('page_header').style.backgroundColor = '#404040';
    document.getElementById('header_menu').style.display = 'flex';
    this.isOpen = true;
  }

  closeMenu(): void {
    document.getElementById('page_header').style.backgroundColor = '#FFF';
    document.getElementById('header_menu').style.display = 'none';
    this.isOpen = false;
  }

}
