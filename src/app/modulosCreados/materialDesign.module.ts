import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatIconModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule, MatGridListModule, MatSelectModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        MatSelectModule,
        MatDialogModule,
        MatSnackBarModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        MatSelectModule,
        MatDialogModule,
        MatSnackBarModule
    ]
})

export class MaterialDesign { }
