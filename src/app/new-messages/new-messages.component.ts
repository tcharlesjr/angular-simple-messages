import { Component, OnChanges, OnInit, DoCheck,
         AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked,
         OnDestroy, SimpleChanges } from '@angular/core';
import { Message } from 'app/core';

@Component({
  selector: 'app-new-messages',
  templateUrl: './new-messages.component.html',
  styleUrls: ['./new-messages.component.scss']
})
export class NewMessagesComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {
  public messages: Message[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('NewMessages - ngOnChanges');
    // console.log(changes);
  }
  ngOnInit() {
    // console.log('NewMessages - ngOnInit');
  }
  ngDoCheck(): void {
    // console.log('NewMessages - ngDoCheck');
  }
  ngAfterContentInit(): void {
    // console.log('NewMessages - ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    // console.log('NewMessages - ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    // console.log('NewMessages - ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    // console.log('NewMessages - ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    // console.log('NewMessages - ngOnDestroy');
  }

  onNewMessage(text: string) {
    const m = new Message(text);
    this.messages.push(m);
  }
}
