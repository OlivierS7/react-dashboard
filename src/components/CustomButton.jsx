import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const CustomButton = ({ title, customFunc, icon, color }) => {
  return (
      <TooltipComponent content={title} position='BottomCenter'>
        <button type='button' 
        onClick={ () => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            { icon }
        </button>
      </TooltipComponent>
    );
}

export default CustomButton