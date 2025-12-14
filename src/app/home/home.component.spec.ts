import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent],
            providers: [
                provideNoopAnimations()
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});