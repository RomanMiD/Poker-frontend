import { Component, forwardRef, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestComponentComponent),
    multi: true
  }]
})
export class TestComponentComponent implements ControlValueAccessor {
  //  tslint:disable-next-line:variable-name
  private _value;
  get value(): any {
    return this._value;
  }

  @Input()
  set value(val: any) {
    this._value = val;
    this.onChange(this._value);
  }

  private modalRef: NgbModalRef

  constructor(private modalService: NgbModal) {
  }


  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.open(template);
  }

  onChange(_: any): void {
  }

  up(): void {
    this.value++;
  }

  down(): void {
    this.value--;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

}

