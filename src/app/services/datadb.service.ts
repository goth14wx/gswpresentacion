import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Usuario from '../models/usuario';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatadbService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  constructor(private afs: AngularFirestore) {
    this.usuariosCollection = this.afs.collection<Usuario>('usuarios');
  }

  guardarUsuario(usuario: Usuario): void {
    this.usuariosCollection.add(usuario);
  }

  getUsuarios(): any {
    return this.usuariosCollection;
  }

}
