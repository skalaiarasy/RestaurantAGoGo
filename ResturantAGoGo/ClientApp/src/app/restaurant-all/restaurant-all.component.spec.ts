/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RestaurantAllComponent } from './restaurant-all.component';

let component: RestaurantAllComponent;
let fixture: ComponentFixture<RestaurantAllComponent>;

describe('RestaurantAll component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RestaurantAllComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RestaurantAllComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});