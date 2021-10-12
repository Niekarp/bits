import { Component, ElementRef, ViewChild } from '@angular/core';

// Tooltip with popup message on hover

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
    @ViewChild("popup") 
    set popupOffset(popupElm: ElementRef) {
        if (!popupElm) return;
    
        this.moveIfOutOfViewport(popupElm.nativeElement);
    }

    public isHovered: boolean = false;
    
    constructor() { }
    
    public moveIfOutOfViewport(popupElm: HTMLElement) {
        // moves tooltip to the left if it goes out of viewport
        const popupRect = popupElm.getClientRects().item(0) as DOMRect;
        
        if(!popupRect) return;

        const diff = window.innerWidth - (popupRect.x + popupRect.width);
        
        if (diff < 0) {
            popupElm.style.left = "unset";
            popupElm.style.right = "0px";
        } else {
            popupElm.style.left = "";
            popupElm.style.right = "";
        }
    }
}
