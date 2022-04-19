import { Component, OnInit } from '@angular/core';
import { Documents } from 'src/app/models/documents';
import { RowTable } from 'src/app/models/row-table';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'poc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dataSource: Documents;
  dataTable: RowTable[];
  displayedColumns: string[] = ['icon', 'name'];

  constructor(private readonly dataTableService: DataTableService) {}

  ngOnInit(): void {
    this.dataTableService.getDataDocuments().subscribe({
      next: (data) => {
        this.dataSource = data;
        this.dataTable = this.buildArrayDataTable(data);
      },
    });
  }

  drop() {}

  private buildArrayDataTable(data: Documents): RowTable[] {
    return data.children.map((child) => {
      return {
        isFile: child.isFile,
        name: child.name,
        hasChildren: child.hasChildren,
      };
    });
  }
}
