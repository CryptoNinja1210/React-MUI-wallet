import { HappyProvider } from "@ant-design/happy-work-theme";
import { Button as Button_Antd } from "antd"; 

interface chattingHeaderProps {
  setShowMessage: (showMessage: boolean) => void;
}

const ChattingHeader = ({setShowMessage}: chattingHeaderProps) => {
  return (
    <div className="w-full h-[62px] bg-[#131314] text-xl font-bold text-white py-6 px-5 items-center flex flex-row justify-between">
    <p style={{fontSize:'16px'}}>Chat</p>
      <div className="flex flex-row gap-3">
        <HappyProvider>
          <Button_Antd
            shape="circle"
            size="middle"
            className="text-black font-bold flex justify-center items-center border-none"
          >
            <img className="w-8 h-8" src="/icons/setting.svg"/>
          </Button_Antd>
          <Button_Antd
            shape="circle"
            size="middle"
            className="text-black font-bold flex justify-center items-center border-none"
            onClick={()=>setShowMessage(false)}
          >
            <img className="w-6 h-6" src="/icons/cross.svg"/>
          </Button_Antd>
        </HappyProvider>
      </div>
    </div>
  )
}

export default ChattingHeader;
