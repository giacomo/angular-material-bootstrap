import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [
                CoreModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
