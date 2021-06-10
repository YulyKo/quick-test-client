import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/auth.service';
import { ROOT_FOLDER_NAME } from './utils/defaultNames.consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('qt-token');
    if (token) this.router.navigate(['/home', ROOT_FOLDER_NAME]);
    else this.router.navigate(['']);    
  }
}
