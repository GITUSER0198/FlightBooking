import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  loggedin = false;
  isAdmin = false;
  user;
  lang;
  opened=false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private tstr: ToastrService,
    public translate: TranslateService) {
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
      this.auth.isUserLoggedIn() ?
      this.loggedin = true : this.loggedin = false;
      this.isUserAdmin();
      this.user=sessionStorage.getItem('username');

    }

  changeLang(lang) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang.match(/de|en/) ? lang : 'en');
    this.lang = lang;
  }

  isUserAdmin(){
    if (sessionStorage.getItem('profession')==='Admin'){
      this.isAdmin = true;
    }
    else{
      this.isAdmin = false;
    }

  }

  logout() {
    this.auth.logOut();
    this.loggedin = false;
    this.tstr.success('', 'Logged out', { timeOut: 1000 });
    this.router.navigate(['login']);

  }

  toggleSidebar(){
    this.opened=!this.opened;

  }

   openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }


}
