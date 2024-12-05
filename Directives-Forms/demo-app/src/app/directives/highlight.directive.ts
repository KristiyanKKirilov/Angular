import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from "@angular/core";

type MyVoid = () => void;

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})
export class HighlightDirective implements OnInit, OnDestroy {
    unsubEventArray: MyVoid[] = [];
     
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
   
    ngOnInit(): void {
        // console.log('Directive is loaded');
        // console.log(this.elRef.nativeElement); 

        const mouseEnterEvent = this.renderer.listen(
            this.elRef.nativeElement,
            'mouseenter',
            this.mouseEnterHandler.bind(this)
        );

        const mouseLeaveEvent = this.renderer.listen(
            this.elRef.nativeElement,
            'mouseleave',
            this.mouseLeaveHandler.bind(this)
        );

        this.unsubEventArray.push(mouseEnterEvent);
        this.unsubEventArray.push(mouseLeaveEvent);

    }

    mouseEnterHandler(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
        this.renderer.addClass(this.elRef.nativeElement, 'highlight');
    }

    
    mouseLeaveHandler(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#fff');
        this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
    }

    ngOnDestroy(): void {
        
    }

}
