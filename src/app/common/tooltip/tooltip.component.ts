import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
    @ViewChild("popup")
    private popupRef!: ElementRef;

    @ViewChild("popup") 
    set popupOffset(popupElm: ElementRef) {
        if (!popupElm) return;
        
        
        this.moveIfOutOfViewport(popupElm.nativeElement);
      }

    public isHovered: boolean = false;
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
    public moveIfOutOfViewport(popupElm: HTMLElement) {
        const popupRect = popupElm.getClientRects().item(0) as DOMRect;

        console.log(popupElm.getClientRects());
        
        if(!popupRect) return;

        const diff = window.innerWidth - (popupRect.x + popupRect.width);

        console.log(diff);
        console.log(popupElm.style.right);
        
        
        if (diff < 0) {
            popupElm.style.left = "unset";
            popupElm.style.right = "0px";
        } else {
            popupElm.style.left = "";
            popupElm.style.right = "";
        }
    }
}
