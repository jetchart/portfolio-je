import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ProjectModalComponent} from '../project-modal/project-modal.component';
import {ModalDialogService} from 'ngx-modal-dialog';
import {Project} from '../../model/project';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];
  constructor(public modalService: ModalDialogService,
              public viewRef: ViewContainerRef,
              private _projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this._projectService.getProjects();
    console.log(this.projects);
  }

  openModal(id: number) {
    this.modalService.openDialog(this.viewRef, {
      data: {id: id},
      childComponent: ProjectModalComponent
    });
  }

}
