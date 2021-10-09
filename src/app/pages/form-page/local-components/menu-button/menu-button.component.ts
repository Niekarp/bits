import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
    @Input()
    public disabled: boolean = true;

    @Input()
    public selected: boolean = false;

    @Input()
    public number: number = 0;

    @Input()
    public text: string = "";

    stopClickPropagationIfDisabled($event: Event): void {
        if (this.disabled) {
            $event.stopPropagation();
        }
    }

    constructor() { }
    
    ngOnInit(): void {
    }
    
}
