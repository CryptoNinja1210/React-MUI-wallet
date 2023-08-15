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
    <div ref={chatContainerRef} className={`${className} w-full bg-gray-900 px-3 overflow-y-scroll no-scrollbar py-5`}>
      <div className={`h-full w-full `}>
        {chattingLog.map((item, index) => (
          <div className={`flex ${item.user === 'Moriah Buckridge' ? 'flex-row-reverse' : 'flex-row'} m-2 items-start`}>
            <img className="w-12 h-12 rounded-full" src={item.avatar}/>
            <div className="flex flex-col mx-2">
              <div className={item.user === 'Moriah Buckridge' ? 'text-lime-500 text-end flex-row-reverse flex gap-5' : 'text-white text-start flex-row flex gap-5'}>
                <p>{item.user.length > 9 ? item.user.split(' ')[0] +' '+ item.user.split(' ')[1].slice(0,1) + '.' : item.user}</p>
                <p>{item.time.getDate() == new Date().getDate()
                  ? `Today   ${item.time.getHours()}:${item.time.getMinutes()}`
                  : Number(((new Date().getTime() - item.time.getTime())/(1000*60*60*24)).toFixed(0)) < 31
                    ? (((new Date().getTime() - item.time.getTime())/(1000*60*60*24)).toFixed(0) + 'days ago')
                    : Number((new Date().getFullYear() - item.time.getFullYear()).toFixed(0)) == 0 
                      ? ((new Date().getMonth() - item.time.getMonth()).toFixed(0) + 'months ago')
                      : ((new Date().getFullYear() - item.time.getFullYear()).toFixed(0) + 'years ago') }
                </p>
              </div>
              <div className= {`bg-gray-600 p-2 break-words rounded-xl max-w-[300px] ${item.user === 'Moriah Buckridge' ? 'rounded-tr-none' : 'rounded-tl-none'}`} key={index}>
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
