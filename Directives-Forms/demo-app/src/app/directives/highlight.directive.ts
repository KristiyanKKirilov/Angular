import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})
export class HighlightDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        // console.log('Directive is loaded');
        // console.log(this.elRef.nativeElement); 

        this.renderer.listen(
            this.elRef.nativeElement,
            'mouseenter',
            this.mouseEnterHandler.bind(this));

        this.renderer.listen(
            this.elRef.nativeElement,
            'mouseleave',
            this.mouseLeaveHandler.bind(this));

    }

    mouseEnterHandler(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
        this.renderer.addClass(this.elRef.nativeElement, 'highlight');
    }

    
    mouseLeaveHandler(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#fff');
        this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
    }

}
