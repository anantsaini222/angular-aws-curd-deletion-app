import {AfterViewInit, ViewChild} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'Asia Pacific(Singapore'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'Asia Pacific(Singapore'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'US East (N.Virginia)'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Canada (Central)'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'Asia Pacific (Tokyo)'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'US East (N.Virginia)'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'Asia Pacific(Singapore'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'Europe (London)'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'Europe (Frankfurt)'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Asia Pacific(Singapore'}
];

@Component({
  selector: 'app-table-selection-example',
  templateUrl: './table-selection-example.component.html',
  styleUrls: ['./table-selection-example.component.css']
})


export class TableSelectionExampleComponent implements AfterViewInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex((d: PeriodicElement) => d === item);
      console.log(this.data.findIndex((d: PeriodicElement) => d === item));
      this.data.splice(index,1)
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
    });
    this.selection = new SelectionModel<PeriodicElement>(true, []);
  }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

