import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribing',
  templateUrl: './unsubscribing.component.html',
  styleUrls: ['./unsubscribing.component.scss'],
})
export class UnsubscribingComponent implements OnInit, OnDestroy {
  constructor() {}

  mouseSubs: Subscription;
  result: { X: number; Y: number } = { X: 0, Y: 0 };

  ngOnInit() {
    this.subscribeScreen();
  }

  ngOnDestroy() {
    this.mouseSubs.unsubscribe();
    console.log('Mouse Subscription unsubscribed');
  }

  subscribeScreen() {
    const pad = document.querySelector('.signPad');
    const mouse = fromEvent(pad, 'mousemove').pipe(
      tap((data) => console.log('original data', data)),
      map((evt: MouseEvent) => {
        return { X: evt.clientX, Y: evt.clientY };
      })
    );

    this.mouseSubs = mouse.subscribe((point) => {
      this.result = point;
      console.log('Mouse Moved @: ', point);
    });
  }

  unsubscribeMouseEvt() {
    this.mouseSubs.unsubscribe();
    console.log('unsubscribed from Mouse Event');
  }
}
