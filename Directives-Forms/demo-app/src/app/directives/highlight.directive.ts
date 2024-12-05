import { Directive, OnInit } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})
export class HighlightDirective implements OnInit{
    ngOnInit(): void {
        console.log('Directive is loaded');
    }

}
