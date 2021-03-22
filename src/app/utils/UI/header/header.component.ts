import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{
  isOpen = false;
  loginStatus: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  changeMenuVisibility(): void {
    this.isOpen === true ? this.closeMenu() : this.openMenu();
  }

  openMenu(): void {
    this.loginStatus = this.authService.getLoginStatus();
    document.getElementById('page_header').style.backgroundColor = '#5B82EF';
    document.getElementById('header_menu').style.display = 'flex';
    document.getElementById('title--logo').style.color = '#FFF';
    // document.getElementById('menu-btn').style.height = '8rem';
    document.getElementById('menu-btn').style.marginBottom = '-4rem';
    document.getElementById('menu-btn').style.marginTop = '6rem';
    this.isOpen = true;
  }

  closeMenu(): void {
    document.getElementById('page_header').style.backgroundColor = '#FFF';
    document.getElementById('header_menu').style.display = 'none';
    document.getElementById('title--logo').style.color = '#404040';
    // document.getElementById('menu-btn').style.height = '4rem';
    document.getElementById('menu-btn').style.marginBottom = '-1rem';
    document.getElementById('menu-btn').style.marginTop = '-6rem';
    // 
    // margin-bottom: -4rem;
    // margin-top: 6rem;
    this.isOpen = false;
  }
}
