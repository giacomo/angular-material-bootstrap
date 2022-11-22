import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

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
