import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
	exports: [
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatDividerModule,
		MatToolbarModule,
		MatTableModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule
	],
	declarations: [],
	imports: [CommonModule],
})
export class MaterialModule {}
