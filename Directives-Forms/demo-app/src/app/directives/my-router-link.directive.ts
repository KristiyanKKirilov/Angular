import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterLink]',
  standalone: true
})
export class MyRouterLinkDirective implements OnInit{
  @Input() appMyRouterLink: string = '';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.renderer.listen(
      this.elRef.nativeElement, 
      'click', 
      this.clickHandler.bind(this)
    );
    
  }

  clickHandler(e: MouseEvent): void{
    console.log('click', this.appMyRouterLink);
    this.router.navigate([this.appMyRouterLink]);
  }

}
