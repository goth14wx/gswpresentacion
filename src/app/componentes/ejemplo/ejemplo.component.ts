import { Component, OnInit } from '@angular/core';
import { DatadbService } from 'src/app/services/datadb.service';
import {MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Usuario from 'src/app/models/usuario';
import { DialogOverviewExampleDialogComponent } from '../modal/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../modal/snackbar/snackbar.component';
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
})
export class EjemploComponent implements OnInit {


  grupoFormulario: FormGroup;
  usuarios: Usuario[];

  animal: string;
  name: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result) {
        this.openSnackBar();
      }
    });
  }

  crearGrupoFormulario() {
    return new FormGroup({
      nombre: new FormControl('', [ Validators.required, Validators.minLength(2)]),
      edad: new FormControl('', [ Validators.required, Validators.minLength(1)]),
      avatar: new FormControl('face1', [Validators.required] )
    });
  }

  // tslint:disable-next-line: variable-name
  constructor(private httpdb: DatadbService, private _snackBar: MatSnackBar , public dialog: MatDialog /* ESTE ES PARA EL MODAL */) {
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
      this.resetearFormulario();
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

  resetearFormulario() {
    this.grupoFormulario.reset();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3 * 1000,
      panelClass: 'bg-success'
    });
  }


}
