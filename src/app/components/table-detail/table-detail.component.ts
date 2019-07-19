import {Component, Input, OnInit} from '@angular/core';
import {get} from 'lodash';
import {orderBy} from 'lodash';
import {filter} from 'lodash';
import {TableConfig} from '../../interfaces/TableConfig';
import {split} from 'lodash';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {

  @Input() elements: any[];
  @Input() tabConf: TableConfig;
  private BUTTONS?;
  private currentOrder: string;
  private orderAsc: boolean;
  private page: number;
  private pageSize: number;
  private searchColumn: string;
  private searchText: string;

  constructor() { }

  ngOnInit() {
    this.BUTTONS = this.tabConf.BUTTONS;
    this.currentOrder = this.getKeyOfTabElem();
    this.orderAsc = true;
    this.elements = orderBy(this.elements, [this.currentOrder], 'asc');
    this.page = 1;
    this.pageSize = 5;
  }

  getKeyOfTabElem() {
    return this.tabConf.header[0].columnName;
  }

  private getParam(elem, paramPath) {
    const paths = split(paramPath, '\.');
    // return get(elem, paramPath);
    return this.getParamRec( elem, paths);
  }

  private getParamRec( elem, paths) {
    if (paths.length === 0) {
      return elem;
    } else {
      if (elem instanceof Array) {
        return elem.map( nestedElem => this.getParamRec(nestedElem, paths)
        ).join(', ');
      } else {
        return this.getParamRec( get(elem, paths[0]), paths.slice(1));
      }
    }
  }

  private orderBy(newOrderPathName) {

    if (this.currentOrder !== newOrderPathName) {
      this.orderAsc = true;
    } else {
      this.orderAsc = ! this.orderAsc;
    }
    const nameOrder = this.orderAsc ? 'asc' : 'desc';
    this.elements = orderBy(this.elements, [newOrderPathName], nameOrder);

    this.currentOrder = newOrderPathName;
  }

  filterByColumn(items, searchText, searchColumn) {
    if (searchColumn && searchText) {
      return filter(items, (item) => this.getParam(item, searchColumn).toString().match(searchText));
    }
    return items;
  }


}
