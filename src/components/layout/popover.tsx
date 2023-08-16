import { useState } from "react";
import { HappyProvider } from "@ant-design/happy-work-theme";
import { Button as Button_Antd } from "antd";

interface NavMenuContentProps {
  handleClose: () => void;
  navDropProps: NavDropPropsTypes[];
}

interface NavDropPropsTypes {
  label: string;
  menulist: string[];
}

const PopOverTSX = ({ handleClose, navDropProps }: NavMenuContentProps) => {
  const [expandedItem, setExpandedItem] = useState<string>('');

  const handleClick = (listItem: string) => {
    console.log(listItem);
    handleClose();
  };

  const handleToggle = (label: string) => {
    if (expandedItem == label) {
      setExpandedItem('')
    } else {
      setExpandedItem(label);
    }
  };

  return (
    <div 
      className="w-full mt-0 mb-auto flex flex-col justify-between items-center p-auto"
      style={{
        paddingTop: 'auto',
        paddingBottom: 'auto'
      }}
    >
      <div className="flex flex-col">
        {navDropProps.map(item => (
          <div key={item.label} className="flex flex-col w-full ">
            <div
              style={{fontFamily: 'montserrat'}}
              className={`${expandedItem == item.label ? "text-lime-500" : "text-white"} text-[14px] font-mono font-bold w-full py-5 pl-3 border-b-2 border-gray-600 text-start cursor-pointer`}
              onClick={() => handleToggle(item.label)}
            >
              <p>{item.label}</p>
            </div>
            <HappyProvider>
              <div
                style={{
                  transitionProperty: 'height, margin, opacity',
                }}
                className={`flex flex-col overflow-hidden h-full`}
              >
                <div className={`${expandedItem == item.label ? "h-auto" : "h-0"} transition-all duration-1000 ease-in-out`}>
                  {item.menulist.map(listItem => (
                    <div
                      className="group relative border-b-2 border-transparent hover:border-gray-600 text-start "
                      key={listItem}
                    >
                      <Button_Antd
                        size="middle"
                        style={{fontFamily: 'montserrat'}}
                        className="text-[14px] font-bold flex text-start w-full h-full text-gray-400 hover:text-white hover:bg-slate-500 py-2 border-none rounded-none"
                        onClick={() => handleClick(listItem)}
                      >
                        {listItem}
                      </Button_Antd>
                    </div>
                  ))}
                </div>
              </div>
            </HappyProvider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopOverTSX;