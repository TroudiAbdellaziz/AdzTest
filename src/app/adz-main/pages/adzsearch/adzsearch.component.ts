import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../../shared/data.service';
import { Router } from '@angular/router';
import {TranslateService, TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'adz-adzsearch',
  templateUrl: './adzsearch.component.html',
  styleUrls: ['./adzsearch.component.css']
})
export class AdzsearchComponent implements OnInit {
  public form: FormGroup;
  public input: AbstractControl;
  public userLang: String;
  constructor(private fb: FormBuilder,
              private router: Router, 
              private dataService: DataService,
              private translate: TranslateService) {
    this.form = fb.group({
      'input': ['', Validators.compose([Validators.required, Validators.min(2)])]
    })
    this.input = this.form.controls['input'];
 //get the prefered language
 this.userLang = localStorage.getItem('userLang') ? localStorage.getItem('userLang') : navigator.language.substring(0, 2);
  }

  ngOnInit() {
  }
  // search function that navigates to the result page
  search(ob: object) {
    let key = ob['input'];
    this.router.navigate(['/results/', key, '1']);
  }

      // change the language to french
      changeToFr() {
        this.userLang = 'fr';
        localStorage.setItem('userLang', 'fr');
        this.translate.setDefaultLang('fr');
      }
      // change the language to english
      changeToEn() {
        this.userLang = 'en';
        localStorage.setItem('userLang', 'en');
        this.translate.setDefaultLang('en');
      }
}
