import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  currentTheme!: string;

  projects = {} as Project[];
  typescript: boolean = false;
  java: boolean = false;
  cplusplus: boolean = false;
  angular: boolean = false;
  springBoot: boolean = false;
  thymeleaf: boolean = false;
  unreal: boolean = false;

  isCollapsed: boolean = true;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService, private themeService: ThemeService){
    this.titleService.setTitle('Arsalane Otmane - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.cplusplus){
      filterTags.push(Tag.CPLUSPLUS);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.springBoot){
      filterTags.push(Tag.SPRINGBOOT);
    }
    if(this.thymeleaf){
      filterTags.push(Tag.THYMELEAF);
    }
    if(this.unreal){
      filterTags.push(Tag.UNREAL);
    }

    if(this.typescript || this.java || this.cplusplus || this.angular || this.springBoot || this.springBoot || this.thymeleaf || this.unreal){
      this.filtering = true;
    }else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.java = false;
    this.cplusplus = false;
    this.angular = false;
    this.springBoot = false;
    this.thymeleaf = false;
    this.unreal = false;
    
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }

}
