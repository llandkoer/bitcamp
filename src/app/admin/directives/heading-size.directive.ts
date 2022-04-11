import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeadingSize]'
})
export class HeadingSizeDirective {

  constructor(private element: ElementRef) {
		this.element.nativeElement.style.fontSize = '1.25rem';
	 }
}
