import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        MaterialModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
}
