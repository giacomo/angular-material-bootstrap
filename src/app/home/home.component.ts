import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [MatCard, MatCardContent]
})
export class HomeComponent {
}
