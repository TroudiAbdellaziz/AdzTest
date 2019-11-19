import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'adz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adz';
  constructor(private translate: TranslateService) {
    // get navigator language and set it as default
    // keep the default config if the app was used before 
    var userLang = navigator.language;
    if (!localStorage.getItem('userLang')) {
      localStorage.setItem('userLang', userLang.substring(0, 2));
    }
    translate.setDefaultLang(localStorage.getItem('userLang'));
  }
}
