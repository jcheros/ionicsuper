import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-agencia',
    templateUrl: 'agencia.html'
})
export class AgenciaPage {

    isReadyToSave: boolean;
    form: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        public translate: TranslateService
        ) 
    {
        this.form = formBuilder.group({
            zona: [''],
            region: [''],
            agencia: [''],
            direccion: [''],
            gerente: [''],
            jefe: [''],
            acompaniante: ['']
        });

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });
    }
}