import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ProjectModalComponent} from '../project-modal/project-modal.component';
import {ModalDialogService} from 'ngx-modal-dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public modalService: ModalDialogService, public viewRef: ViewContainerRef) { }

  ngOnInit() {
  }

  openNewDialog() {
    this.modalService.openDialog(this.viewRef, {
      data: 'esta es la informacion que llega desde el componente padre',
      childComponent: ProjectModalComponent
    });
  }

}
