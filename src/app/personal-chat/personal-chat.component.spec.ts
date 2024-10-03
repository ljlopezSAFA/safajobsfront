import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalChatComponent } from './personal-chat.component';

describe('PersonalChatComponent', () => {
  let component: PersonalChatComponent;
  let fixture: ComponentFixture<PersonalChatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PersonalChatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});