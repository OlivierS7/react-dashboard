import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, ContextMenu, ExcelExport, PdfExport, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, smallContextMenuItems, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        allowExcelExport
        allowPdfExport
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        contextMenuItems={smallContextMenuItems}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, ExcelExport, PdfExport, ContextMenu, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
