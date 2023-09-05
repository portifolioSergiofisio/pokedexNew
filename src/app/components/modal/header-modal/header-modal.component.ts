import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
})
export class ModalHeaderComponent {
  @Input() pokemon: any;

  constructor(public modalService: NgbModal) { }

  fecharModal(): void {
    this.modalService.dismissAll();
  }
}
