import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialogData';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatadbService } from 'src/app/services/datadb.service';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent {

  formularioUsuario: FormGroup;
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
  get nombre() { return this.formularioUsuario.get('nombre'); }
  get edad() { return this.formularioUsuario.get('edad'); }
  crearFormularioReactivo() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      edad: new FormControl('', [ Validators.required ]),
      avatar: new FormControl('face1', [ Validators.required ])
    });
  }
  constructor(public usuarioDb: DatadbService,
              public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.formularioUsuario = this.crearFormularioReactivo();
    }

    onGuardar() {
      if ( this.formularioUsuario.valid ) {
        this.usuarioDb.guardarUsuario( this.formularioUsuario.value);
        this.resetarModal();
      } else {
        console.log('los datos son invalidos');
      }
    }
    resetarModal() {
      this.formularioUsuario.reset();
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
