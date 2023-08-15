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
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleClick = (listItem: string) => {
    console.log(listItem);
    handleClose();
  };

  const handleToggle = (label: string) => {
    if (expandedItems.includes(label)) {
      setExpandedItems(prevItems => prevItems.filter(item => item !== label));
    } else {
      setExpandedItems(prevItems => [...prevItems, label]);
    }
  };

  return (
    <div 
      className="w-[100%] m-auto  flex flex-col justify-center items-center p-auto"
      style={{
        paddingTop: 'auto',
        paddingBottom: 'auto'
      }}
    >
      <div className="flex flex-col justify-center items-center p-auto">
        {navDropProps.map(item => (
          <div key={item.label} className="flex flex-col justify-center w-full">
            <div
              className={`${expandedItems.includes(item.label) ? "text-lime-500" : "text-white"} text-3xl font-mono font-bold w-full py-2 border-b-2 border-gray-600 text-center cursor-pointer`}
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
                <div className={`${expandedItems.includes(item.label) ? "h-auto" : "h-0"} transition-all duration-1000 ease-in-out`}>
                  {item.menulist.map(listItem => (
                    <div
                      className="group relative border-b-2 border-transparent hover:border-gray-600 text-center "
                      key={listItem}
                    >
                      <Button_Antd
                        size="middle"
                        className="text-2xl font-mono font-bold flex justify-center items-center w-full h-full text-gray-400 hover:text-white hover:bg-slate-500 py-2 border-none rounded-none"
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