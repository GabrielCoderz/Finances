import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedPasswordValidator } from './../../../utils/ConfirmedPasswordValidator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formularioDeUsuario: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formularioDeUsuario = this.fb.group({
      email: ['', Validators.compose([Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmarSenha: ['', Validators.compose([Validators.required])]
    }, {
      validator: ConfirmedPasswordValidator('senha', 'confirmarSenha')
    });

  }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.formularioDeUsuario.value)
  }

}
