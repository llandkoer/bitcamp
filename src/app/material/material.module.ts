import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	exports: [
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatDividerModule,
		MatToolbarModule,
		MatTableModule,
	],
	declarations: [],
	imports: [CommonModule],
})
export class MaterialModule {}
