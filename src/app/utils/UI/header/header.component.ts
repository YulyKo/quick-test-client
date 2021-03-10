import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{
  isOpen = false;

  constructor() { }

  ngOnInit(): void {}


  changeMenuVisibility(): void {
    this.isOpen === true ? this.closeMenu() : this.openMenu()
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
