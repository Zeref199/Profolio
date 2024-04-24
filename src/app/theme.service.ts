import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('light');

  constructor() { }

  getCurrentTheme() {
    return this.currentThemeSubject.asObservable();
  }

  toggleTheme() {
    const currentTheme = this.currentThemeSubject.value === 'light' ? 'dark' : 'light';
    document.body.classList.remove(this.currentThemeSubject.value + '-theme');
    document.body.classList.add(currentTheme + '-theme');
    this.currentThemeSubject.next(currentTheme);
  }
}