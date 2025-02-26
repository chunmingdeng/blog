# AG GRID ANGULAR
## vison compatibility

|Angular|AG Grid|
|---|---|
|17 - 19	|28 - 33|
|16	|28 - 32|
|14 - 15	|25 - 31|
|12 - 13	|25 - 30|
|10 - 11	|24 - 27|
|9	|23 - 27|
|8	|18 - 27|
|6 - 7	|18 - 22|
## 属性
- `components`[link](https://www.ag-grid.com/angular-data-grid/components/#registering-custom-components)
- `autoGroupColumnDef` 自定义全选单元格
- `columnDefs<object>`
    - `cellClassRules<object>`
    - `cellEditor<string>`
    - `cellEditorParams<{values: array}|object>`
    - `cellClassRules<{classString:function}>`
    - `cellRenderer<component>`
        ```js
        @Component({
            selector: 'app-company-logo-renderer',
            standalone: true,
            imports: [CommonModule],
            template: `<span>@if(value){<img [alt]="value" [src]="'https://www.ag-grid.com/example-assets/space-company-logos/' + value.toLowerCase() + '.png'" /> <p>{{ value }}</p>}</span>`,
        })

        export class CompanyLogoRenderer implements ICellRendererAngularComp {
            // Init Cell Value
            public value!: string;
            agInit(params: ICellRendererParams): void {
                this.value = params.value;
            }

            refresh(params: ICellRendererParams): boolean {
                this.value = params.value;
                return true;
            }
        }

        colDefs: ColDef[] = [
            {
                field: "company",
                cellRenderer: CompanyLogoRenderer // Render a custom component
            }
            // ...
        ];
        ```
    - `editable<boolean>`
    - `flex<number>`
    - `field<string>`
    - `headerName<string>`
    - `filter<boolean>`
    - `floatingFilter<boolean>`
    - `lockPosition<boolean>`
    - `pinned<'left'|'right'>`
    - `valueGetter<function>`
    - `resizable<boolean>`
    - `valueFormatter<function>`
    - `headerClass`: 'ag-right-aligned-header', 结合type使用更方便
    - `cellClass`: 'ag-right-aligned-cell'
    - `type`[link](https://www.ag-grid.com/archive/27.3.0/angular-data-grid/column-definitions/#default-column-definitions)
    - `
    - `
    - `
    - `
    - `
- `defaultColDef<ColDef>` 设置所有列的默认值
    ```js
    @Component({
        template:`
        <div class="content">
            <ag-grid-angular [defaultColDef]="defaultColDef"/>
        </div>`,
    })
    export class AppComponent {
        // Default Column Definitions: Apply configuration across all columns
        defaultColDef: ColDef = {
            filter: true
        }
        // ...
    }
    ```
- `getRowClass<function>`
- `getRowStyle<function>`
- `getRowHeight<function>`
- `getRowId<function>`
    > 数据渲染相关
- `headerHeight<number>`
- `loadingOverlayComponent`[link](https://www.ag-grid.com/angular-data-grid/overlays/)
- `loadingOverlayComponentParams`[link](https://www.ag-grid.com/angular-data-grid/overlays/)
- `noRowsOverlayComponent`[link](https://www.ag-grid.com/angular-data-grid/overlays/)
- `pagination<boolean>`
- `paginationPageSize<number>`
- `paginationPageSizeSelector<number[]>`
- `pinnedBottomRowData<any[]>`[link](https://www.ag-grid.com/angular-data-grid/row-pinning/)
    > 固定在表格底部的数据行
- `rowHeight<number>`
- `rowData<array>`
- `rowBuffer<number|10>`
    > 可视区域外渲染的数据行数
- `rowClassRules<{classString:function}>`
- `rowSelection<object>`
    - `mode<'multiRow'|string>`
    - `enableClickSelection?: boolean  |  'enableDeselection'  |  'enableSelection'`
    - `checkboxes?: boolean  |  CheckboxSelectionCallback<TData, TValue>`
    - `checkboxLocation?: CheckboxLocation`
    - `isRowSelectable?: IsRowSelectable<TData>`// Callback to be used to determine which rows are selectable. By default rows are selectable, so return `false` to make a row non-selectable.
    - `
    - `
    - `
    - `
    - `
- `tooltipShowDelay<number>`
- `tooltipHideDelay<number>`
- `tooltipInteraction<boolean>`
    > Set to true to enable tooltip interaction. When this option is enabled, the tooltip will not hide while the tooltip itself it being hovered or has focus.
- `theme<themeQuartz.withParams>`

## 事件
- `gridReady<function>`
    ```js
    onGridReady(params: GridReadyEvent) {...}
    ```
- `cellValueChanged`
    ```js
    // <ag-grid-angular (cellValueChanged)="onCellValueChanged($event)"/>
    onCellValueChanged = (event: CellValueChangedEvent) => {
        console.log(`New Cell Value: ${event.value}`);
    };
    ```
- `cellClicked`
- `selectionChanged`
- `columnResized`
- `bodyScroll`
- `
- `
- `
- `

## 二次封装