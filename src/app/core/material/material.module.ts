import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatCard, 
    MatCardContent, 
    MatCardHeader, 
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions 
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel, MatError } from '@angular/material/input';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatCardSubtitle,
        MatCardActions,
        MatIcon,
        MatFormField,
        MatLabel,
        MatError,
        MatTab,
        MatTabGroup,
    ],
    exports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatCardSubtitle,
        MatCardActions,
        MatIcon,
        MatFormField,
        MatLabel,
        MatError,
        MatTab,
        MatTabGroup,
    ]
})
export class MaterialModule {
}