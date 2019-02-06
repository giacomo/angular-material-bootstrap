import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatInputModule, MatTabsModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
    ],
    exports: [
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
    ]
})
export class MaterialModule {
}
