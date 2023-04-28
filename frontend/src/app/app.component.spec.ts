import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  /*   it('should display a h1 title', () => {
      const title = 'Bem vindo ao Carsales Manager';
      const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
      h1.textContent = title;
      expect(h1.textContent).toBe(Component)
    }); */
});
