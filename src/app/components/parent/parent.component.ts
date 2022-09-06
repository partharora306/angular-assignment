import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  radioItems: Array<string>; // list of radio button we can add
  model = { option: 'option3' }; // used for getting the values of radio button

  constructor() {}
  ngOnInit() {
    this.radioItems = ['row', 'column'];

    const numbers = interval(60000);
    const callAfterMinute = numbers.pipe();
    callAfterMinute.subscribe((x) => {
      this.sendMoneyToJack();
      this.sendMoneyToJill();
    });
  }

  childData = [
    //HardCoded values
    { name: 'Jack', money: 10 },
    { name: 'Jill', money: 15 },
  ];

  sendMoneyToJack() {
    //Parent to Parent
    this.childData[0].money += 10;
  }

  sendMoneyToJill() {
    //Parent to Parent
    this.childData[1].money += 10;
  }

  getMoney($event: any) {
    // call from the Child Component
    if ($event == 'Jack') this.childData[0].money += 5;

    if ($event == 'Jill') this.childData[1].money += 5;
  }

  subtractMoneyParentCall($event) {
    if ($event == 'Jack') this.childData[0].money -= 10;

    if ($event == 'Jill') this.childData[1].money -= 10;
  }
}
