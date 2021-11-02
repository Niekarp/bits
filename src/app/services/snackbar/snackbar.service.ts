import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    
    constructor(private snackbar: MatSnackBar) { }
    
    displayStepNavigationFailToast() {
        this.snackbar.open("fill marketing or technical name", undefined, {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['my-snackbar--problem']
        });
    }
    
    displayRequiredStepsNotFilledToast() {
        this.snackbar.open("required fields not filled", undefined, {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['my-snackbar--problem']
        });
    }
}
