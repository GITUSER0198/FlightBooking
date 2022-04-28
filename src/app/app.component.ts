import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'Form1';
  constructor(public translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    const browserLang = this.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');

  }



  getBrowserLang() {
    return this.translate.getDefaultLang() || 'en';
  }

}
