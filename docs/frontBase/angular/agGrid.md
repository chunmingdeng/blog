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
    - `cellRenderer<component>` 自定义单元格渲染(简单纯文本或者html)
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
    - `cellRendererSelector<Function>` 自定义单元格渲染（复杂组件）
        ```ts
            cellRendererSelector: CellRendererSelectorFunc<TData, TValue>;

            interface CellRendererSelectorFunc<TData = any, TValue = any> {
                (params: ICellRendererParams<TData, TValue>) : CellRendererSelectorResult | undefined
            }

            interface CellRendererSelectorResult {
            // Equivalent of setting `colDef.cellRenderer` 
            component?: any;
            // Equivalent of setting `colDef.cellRendererParams` 
            params?: any;
            }
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
### 自定义表头
```ts
import { IHeaderAngularComp } from 'ag-grid-angular';

export class ColumnHeaderRendererComponent implements IHeaderAngularComp {
    public params!: IHeaderParams & ICustomHeaderParams;

    get field(): string {
        return this.params.column.getColId();
    }

    get _sortType(): SortType {
        return this.params.sortType;
    }

    constructor(private enhanceTableService: EnhanceTableService, private cdr: ChangeDetectorRef) {}

    agInit(params: IHeaderParams & ICustomHeaderParams): void {
        this.params = params;
        // this.params.api 获取ag-grid实例
        // this.params.api.getColumnState() 获取所有列状态 
        // this.params.api.applyColumnState 批量设置列状态
        // this.params.column 获取当前列实例

        // 监听原生的排序事件，this.params.column.setSort(), this.params.setSort()都会触发该事件
        // params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));

    }


    onSortRequested(event: PointerEvent) {
        const _SortTypeCircle = [null, 'asc', 'desc'];
        const _p = this.params;
        const _allColumState = _p.api.getColumnState();
        const _field = _p.column.getColId()

        let index = (_SortTypeCircle.findIndex(r => r === (p.sortType ?? null)) + 1) % 3;
        const _sortType = _SortTypeCircle[index];
        console.log('%c column state:', 'color: green',field, state);
        const newState = state.map(r => ({
            ...r,
            sort: r.colId === field ? 'asc' : null
        }))
        _p.api.applyColumnState({
            state: newState as any,
            defaultState: { sort: null }
        });
        console.log('%c new column state:', 'color: green',field, this.params.api.getColumnState());
        // 如果有自定义排序函数，则调用自定义排序事件回调函数
        if (p.sortFn) {
            this.enhanceTableService.customSort$.next({
                feild: p.column.getColId(),
                order: _sortType,
            });
            p.sortType = _sortType;
            p.sortFn(event, p);
            return;
        }
        // 执行原生排训
        // p.setSort(p.sortType as any, event.shiftKey);
    }
    // 执行框架的默认排序逻辑
    // onSortRequested(order: 'asc' | 'desc' | null, event: any) {
    //   this.params.setSort(order, event.shiftKey);
    // }
    visible: boolean = false;

    confirm(): void {
        this.enhanceTableService.setCustomFilter({
            key: this.params.column.getColId(),
            searchValue: this.searchValue,
            sortType: this._sortType,
        });
        this.visible = false;
    }

    change(value: boolean): void {
        console.log(value);
    }
    reset(): void {
        this.searchValue = '';
        // this.sortType = SortType.ASC;
    }
    setDoneColumn(col) {
        if (col.type && col.type === 'firstIn') {
            return;
        }
        // 保存到接口
        this.enhanceTableService.updatePageCustomDisplaySetting(this.tableId, col.data).subscribe((res: VgrResponse<any>) => {
            if (res.code === '0') {
                this.enhanceTableService.setCustomCols(col.data);
            }
        });
    }
    keyupSearchFunc(e) {}
    refreshData(isFirst: boolean) {}

    refresh(params: IHeaderParams & ICustomHeaderParams) {
        return false;
    }
    public isTemplateRef(value: any): boolean {
        return value instanceof TemplateRef;
    }
}
```