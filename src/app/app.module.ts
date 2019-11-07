import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { EjemploComponent } from './componentes/ejemplo/ejemplo.component';
import { Error404Component } from './componentes/error404/error404.component';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MaterialDesign } from './modulosCreados/materialDesign.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

// tslint:disable-next-line: max-line-length
import { DialogOverviewExampleDialogComponent } from './componentes/modal/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { SnackbarComponent } from './componentes/modal/snackbar/snackbar.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { SliderOnePresentacionComponent } from './componentes/sliders/slider-one-presentacion/slider-one-presentacion.component';
import { SliderTwoAngularComponent } from './componentes/sliders/slider-two-angular/slider-two-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InicioComponent,
    EjemploComponent,
    Error404Component,
    DialogOverviewExampleDialogComponent,
    SnackbarComponent,
    DetallesComponent,
    SliderOnePresentacionComponent,
    SliderTwoAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MaterialDesign,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ DialogOverviewExampleDialogComponent, SnackbarComponent ] // NECESITAMOS ESTE COMPONENTE EN ESTE APARTADO
})
export class AppModule { }
