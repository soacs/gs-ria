import { Component } from '@angular/core';
import { IToolPanelParams, Column } from '@ag-grid-community/core';
import { IToolPanelAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'ria-ag-grid-add-row-status-bar-component',
  templateUrl: './add-row-status-bar.component.html'
})
export class AgGridAddRowStatusBarComponent implements IToolPanelAngularComp {
  private params: IToolPanelParams;

  public agInit(params: IToolPanelParams): void {
    this.params = params;
  }

  public onAddRow(): void {
    this.params?.api?.applyTransaction({
      add: [this.params.columnApi?.getAllColumns().reduce((resultObj, col: Column) => {
        resultObj[col.getColId()] = null;
        return resultObj;
      }, {})]
    });
  }

}
