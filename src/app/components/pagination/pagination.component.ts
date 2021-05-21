import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Base } from '../../common/classes/base.class';
import { PaginationParams } from 'poker-common';




@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent extends Base implements OnInit {
  @Input()
  public pageSize: number;
  public page= 1;
  @Input()
  public totalCount: number;
  @Output()
  pageChange: EventEmitter<PaginationParams> = new EventEmitter();

  constructor() {
    super()


  }

  ngOnInit() {
  }

  onPageChange(pageNumber: number) {
    const paginationParams: PaginationParams= {
      skip: (pageNumber*this.pageSize) - this.pageSize,
      limit: this.pageSize
      }
    this.pageChange.emit(paginationParams);
  }
}

