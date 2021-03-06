import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
@ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver ) { }

  ngOnInit(): void {
  }


	ngAfterViewInit() {
		this.observer.observe(['(max-width: 800px)']).subscribe(res => {
			if(res.matches){
				this.sidenav.mode = 'over';
				this.sidenav.close();
			} else {
				this.sidenav.mode = 'side';
				this.sidenav.open();
			}
			// console.log(typeof this.sidenav.mode)
		})
	}

}
