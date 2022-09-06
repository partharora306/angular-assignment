import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() getMoney = new EventEmitter();
  @Output() subtractMoneyParentCall = new EventEmitter();

  @Input() name: string;
  @Input() money: number;

  constructor() {}

  ngOnInit() {}
  subtractMoney() {
    //Called from the parent
    this.money -= 10;
    this.subtractMoneyParentCall.emit(this.name);
  }

  handleGetMoney() {
    // called from child itself and further calling its parent
    this.getMoney.emit(this.name);
  }
}
