import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, MatIcon]
})
export class AppComponent {
}
