import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from 'scam-bdi-uikit';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {

  modalText: string;
  private modalReference: any;
 
  isWarning: boolean;
  @ViewChild('myModal', {static: false}) myModal: TemplateRef<any>;
  
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  tabChange($event) {
   
  }

  showModal(text) {
    this.modalText = text;
    this.modalReference = this.modalService.open(this.myModal);
    this.isWarning = false;
}

showWarning(text) {
    this.modalText = text;
    this.modalReference = this.modalService.open(this.myModal);
    this.isWarning = true;
}

}
