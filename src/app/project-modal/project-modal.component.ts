import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit{
  currentTheme!: string;
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef, private themeService: ThemeService){
    
  }
  ngOnInit(): void {
      this.themeService.getCurrentTheme().subscribe(theme => {
      this.currentTheme = theme;
    });
  }

}
