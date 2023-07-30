import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from "@angular/material/dialog"
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from "@angular/material/input"
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';









@NgModule({
  declarations: [],
  imports: [
    CommonModule
    
  ],
  exports:[MatSnackBarModule,MatDialogModule,MatToolbarModule,
    MatProgressSpinnerModule,MatIconModule,
    MatFormFieldModule,MatButtonModule,MatInputModule,
    FormsModule,MatCardModule,MatListModule,MatMenuModule ]
})
export class MaterialsModule { }
