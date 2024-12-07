import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  standalone: true
})
export class MyStructuralDirective implements OnChanges{
  @Input() appMyStructural: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>, 
    private vcRef: ViewContainerRef) { }

  ngOnChanges(changes:SimpleChanges): void {
    console.log(this.appMyStructural);
    console.log(this.templateRef);

    if(this.appMyStructural){
        this.vcRef.createEmbeddedView(this.templateRef, {
          myCustomValue: 'Custom value',
        });
    }else{
      this.vcRef.clear(); 
    } 
  }

}
