import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// Menu button to navigate between form steps

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

    @Output()
    public notFilled = new EventEmitter(); // informs form-page that user tried navigation before filling mandatory fields

    stopClickPropagationIfDisabled($event: Event): void {
        if (this.disabled) {
            $event.stopPropagation();
            this.notFilled.emit('');
        }
    }

    constructor(private snackbar: MatSnackBar) { }
    
    ngOnInit(): void {
    }

    public displayToastIfDisabled(): void {
        if (this.disabled) {
            this.snackbar.open("fill marketing or technical name", undefined, {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['my-snackbar--problem']
            });
        }
    }
    
}
