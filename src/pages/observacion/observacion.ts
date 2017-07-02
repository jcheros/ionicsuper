import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-observacion',
  templateUrl: 'observacion.html'
})
export class ObservacionPage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public formBuilder : FormBuilder,
      public navCtrl: NavController,
      public viewCtrl: ViewController,
      public translate: TranslateService,
      public camera: Camera){
        this.form = formBuilder.group({
          profilePic: [''],
          descripcion: ['']
        });

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
          this.isReadyToSave = this.form.valid;
        });
  }

  ionViewDidLoad() {
    
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 100,
        targetHeight: 100,
        saveToPhotoAlbum: false,
        correctOrientation: true
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  deletePicture(){
    this.form.patchValue({ 'profilePic': null });
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}