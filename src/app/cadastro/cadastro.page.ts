import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HelperService } from '../services/helper.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',

  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    public helper: HelperService,
    public http: HttpClient
  ) { }

  email = this.getEmail();
  contactField: string | null = null;
  messageField: string | null = null;

  ngOnInit() {
  }

  getEmail() {
    const email = this.helper.getUrlParameter('email');
    console.log(email);
    return email;

  }

  sendForm(f: NgForm) {
    const url = environment.apiUrl + '/saveForm';
    const dataIn = {
      contact: this.contactField,
      message: this.messageField
    };
    this.http.post(url, dataIn).subscribe( dataOut => {
      console.log(dataOut);
    }, error => {
      console.log(error.message);
    });
  }

}
