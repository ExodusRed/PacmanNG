import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoScene } from './demo-scene';

describe('DemoScene', () => {
  let component: DemoScene;
  let fixture: ComponentFixture<DemoScene>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoScene],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoScene);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
