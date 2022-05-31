import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, ContextMenu, ExcelExport, PdfExport, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItemsEmployeesPage, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        contextMenuItems={contextMenuItemsEmployeesPage}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page, ExcelExport, PdfExport, ContextMenu, Toolbar]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
