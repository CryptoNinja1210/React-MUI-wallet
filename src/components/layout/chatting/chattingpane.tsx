import { useEffect, useRef } from "react";

interface chattingProps {
  className: string;
  chattingLog: chattingLogType[];
}

interface chattingLogType {
  id: string;
  user: string;
  avatar: string;
  message: string;
  time: Date;
}

const ChattingPane = ({className, chattingLog}: chattingProps) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chattingLog]);

  return (
    <div ref={chatContainerRef} style={{fontFamily: 'Montserrat'}} className={`${className} w-full bg-[#1C1E22] overflow-y-scroll no-scrollbar py-0`}>
      <div>
        {chattingLog.map((item, index) => (
          <div className={`flex ${item.id === '01' ? 'flex-row-reverse' : 'flex-row'} m-6 items-start `}>
            <div className="min-w-fit relative flex flex-col justify-center items-center">
              <img className="min-w-fit w-12 h-12 rounded-full" src={item.avatar}/>
              <div className={`absolute -bottom-2 w-[80%] h-5 ${Number(item.id) ==25 ? 'bg-[#FFC329]' : Number(item.id) == 82 ? 'bg-[#9D63F6]' : 'bg-[#ffffff]'} rounded-md text-center text-black font-bold text-sm`}>{`V${item.id}`}</div>
            </div>
            <div className="flex flex-col mx-2 gap-2">
              <div className={item.id === '01' ? 'text-[#606872] text-end flex-row-reverse flex gap-5' : 'text-[#606872] text-start flex-row flex gap-5'}>
                <p>{item.user.length > 9 ? item.user.split(' ')[0] +' '+ item.user.split(' ')[1].slice(0,1) + '.' : item.user}</p>
                <p className="text-[#3D444A]">{item.time.getDate() == new Date().getDate()
                  ? `Today   ${item.time.getHours()}:${item.time.getMinutes()}`
                  : Number(((new Date().getTime() - item.time.getTime())/(1000*60*60*24)).toFixed(0)) < 31
                    ? (((new Date().getTime() - item.time.getTime())/(1000*60*60*24)).toFixed(0) + 'days ago')
                    : Number((new Date().getFullYear() - item.time.getFullYear()).toFixed(0)) == 0 
                      ? ((new Date().getMonth() - item.time.getMonth()).toFixed(0) + 'months ago')
                      : ((new Date().getFullYear() - item.time.getFullYear()).toFixed(0) + 'years ago')}
                </p>
              </div>
              <div className= {`bg-[#24262B] p-2 break-words rounded-xl max-w-[250px] ${item.id === '01' ? 'rounded-tr-none text-[#909EAB]' : 'rounded-tl-none text-[#909EAB]'}`} key={index}>
                {item.message}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChattingPane;
