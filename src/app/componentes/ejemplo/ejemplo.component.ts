import { Component, OnInit } from '@angular/core';
import { DatadbService } from 'src/app/services/datadb.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import Usuario from 'src/app/models/usuario';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {


  grupoFormulario: FormGroup;
  usuarios: Usuario[];
  avatars: any = [
  {
    avatar: 'Avatar 1',
    val: 'face1'
  },
  {
    avatar: 'Avatar 2',
    val: 'face2'
  },
  {
    avatar: 'Avatar 3',
    val: 'face3'
  },
  {
    avatar: 'Avatar 4',
    val: 'face4'
  },
  {
    avatar: 'Avatar 5',
    val: 'face5'
  },
  {
    avatar: 'Avatar 6',
    val: 'face6'
  },
  {
    avatar: 'Avatar 7',
    val: 'face7'
  },
  {
    avatar: 'Avatar 8',
    val: 'face8'
  },
  {
    avatar: 'Avatar 9',
    val: 'face9'
  }
  ];
  crearGrupoFormulario() {
    return new FormGroup({
      nombre: new FormControl('', [ Validators.required, Validators.minLength(2)]),
      edad: new FormControl('', [ Validators.required, Validators.minLength(1)]),
      avatar: new FormControl('face1', [Validators.required] )
    });
  }

  constructor(private httpdb: DatadbService) {
    this.grupoFormulario = this.crearGrupoFormulario();
  }

  onReset() {
    this.grupoFormulario.reset();
  }

  onGuardar() {
    if (this.grupoFormulario.valid) {
      // console.log(this.grupoFormulario.value);
      this.httpdb.guardarUsuario(this.grupoFormulario.value);
      this.obtenerUsuarios();
      console.log('guardado');
    } else {
      console.log('no valido');
    }
  }
  get nombre() { return this.grupoFormulario.get('nombre'); }
  get edad() { return this.grupoFormulario.get('edad'); }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.httpdb.getUsuarios().valueChanges().subscribe(
      usuarios => this.usuarios = usuarios
    );
    console.log(this.usuarios);
  }


}
