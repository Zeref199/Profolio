import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;
  currentTheme!: string;

  constructor(private titleService: Title, private projectService: ProjectsService, private themeService: ThemeService){
    this.titleService.setTitle('Arsalane Otmane - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.currentTheme = theme;
    });
  }

}
