import {Component, ComponentRef, OnInit} from '@angular/core';
import {IModalDialog, IModalDialogButton, IModalDialogOptions} from 'ngx-modal-dialog';

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

  constructor() {
    this.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'Save', onAction: () => true },
      { text: 'Error', onAction: () => false }
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
    options.title = "Modal";
    this.data = options.data;
  }


}
