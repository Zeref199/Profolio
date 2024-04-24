import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  currentTheme!: string;

  constructor(private themeService: ThemeService, private router: Router){
    
  }
  
  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  isDarkTheme() {
    return this.currentTheme === 'dark';
  }

  isActive(route: string) {
    // Check if the current route is the active route
  return this.router.url === route;
  }

}
