import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkRequestsPageComponent } from './network-requests-page.component';

describe('FormPageComponent', () => {
  let component: NetworkRequestsPageComponent;
  let fixture: ComponentFixture<NetworkRequestsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkRequestsPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
