import { SubSink } from 'subsink';
import { Directive, OnDestroy } from '@angular/core';


@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class Base implements OnDestroy {
  protected subs = new SubSink();
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
