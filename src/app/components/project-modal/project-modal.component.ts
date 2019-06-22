import {Component, ComponentRef, OnInit} from '@angular/core';
import {IModalDialog, IModalDialogButton, IModalDialogOptions} from 'ngx-modal-dialog';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit, IModalDialog {

  actionButtons: IModalDialogButton[];
  data: string;

  ngOnInit() {
  }

  constructor(private _projectService: ProjectService) {
    /*.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'Save', onAction: () => true },
      { text: 'Error', onAction: () => false }
    ];*/
    this.actionButtons = [
      { text: 'Close' }
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {

    const id = options.data.id;
    const project = this._projectService.getProjectById(id);
    console.log(project);
    options.title = project.title;
    this.data = project.content;
  }



}
