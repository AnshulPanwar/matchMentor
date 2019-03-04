import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalState {

  private _data = new Subject<Object>();
  private _dataStream$ = this._data.asObservable();

  private _subscriptions: Map<string, Array<Function>> = new Map<string, Array<Function>>();

  constructor() {
    this._dataStream$.subscribe((data) => this._onEvent(data));
  }

  toggle( event, value? ) {
    this._notifyDataChanged( event, value, false );
  }

  notifyDataChanged(event, value) {
    this._notifyDataChanged( event, value, true );
  }

  subscribe(event: string, callback: Function) {
    const subscribers = this._subscriptions.get(event) || [];
    subscribers.push(callback);
    this._subscriptions.set(event, subscribers);
  }

  unsubscribe(event: string, object ) {
    const subscribers = this._subscriptions.get(event) || [];
    const index = subscribers.indexOf( object );
    subscribers[index] = undefined;
    subscribers.splice( index, 1 );
    this._subscriptions.set(event, subscribers);
  }

  _notifyDataChanged(event: string, value: any, dataCheckFlag: boolean) {
    const current = this._data[event];
    if ( !dataCheckFlag || current !== value ) {
      this._data[event] = value;

      this._data.next({
        event: event,
        data: this._data[event]
      });
    }
  }

  _onEvent(data: any) {
    const subscribers = this._subscriptions.get(data['event']) || [];

    subscribers.forEach((callback) => {
      callback.call(null, data['data']);
    });
  }
}
