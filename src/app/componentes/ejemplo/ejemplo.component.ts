import { Component, OnInit } from '@angular/core';
import { DatadbService } from 'src/app/services/datadb.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {


  grupoFormulario: FormGroup;

  crearGrupoFormulario() {
    return new FormGroup({
      nombre: new FormControl('', [ Validators.required, Validators.minLength(2)]),
      edad: new FormControl('', [ Validators.required, Validators.minLength(1)])
    });
  }

  constructor(private httpdb: DatadbService) {
    this.grupoFormulario = this.crearGrupoFormulario();
  }

  onReset() {
    this.grupoFormulario.reset();
  }

  onGuardar() {
    const nuevoUsuario = {
      nombre: 'Carlos desde Angular',
      edad: '12'
    };
    console.log(this.grupoFormulario.value);
    this.httpdb.guardarUsuario(this.grupoFormulario.value);
    console.log('guardado');
  }

  ngOnInit() {
  }

}
