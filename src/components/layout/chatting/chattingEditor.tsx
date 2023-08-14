import { HappyProvider } from "@ant-design/happy-work-theme";
import { Button as Button_Antd } from "antd";
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useRef, useState, useEffect } from "react";
import EmojiPicker, { Theme } from "emoji-picker-react";

interface chattingEditorProps {
  chattingLog: chattingLogType[];
  setChattingLog: ((chattingLog: chattingLogType[]) => void | Dispatch<SetStateAction<{ id: string; user: string; avatar: string; message: string; }[]>>);
}
interface chattingLogType {
  id: string;
  user: string;
  avatar: string;
  message: string;
  time: Date;
}
const ChattingEditor = ({
  chattingLog, 
  setChattingLog
} : chattingEditorProps) => {

  const [newMessage, setNewMessage] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sendBtnRef = useRef<HTMLButtonElement | null>(null);
  const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.target.value.replace(/ {2,}/g, ' '))
    console.log(event)
  }
  const onEmojiClick = (emojiObject: { emoji: string }) => {
    setNewMessage(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  const handleKeyDown = (event:KeyboardEvent) => {
    if (event.key === 'Enter') {
      sendBtnRef.current?.click();
    }
  };
  const handleSend = () => {
    if(newMessage != '') {
      setChattingLog(
        [...chattingLog,
          {
            id: `message_${Date.now()}`,
            user: 'Moriah Buckridge',
            avatar: '/images/avatar1.jpg',
            message: newMessage,
            time: new Date(),
          }
        ]
      );
    }
    inputRef.current?.focus();
    setNewMessage('')
  }

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.style.height = '48px'
      if(newMessage.length !== 0) {
        inputRef.current.style.height = `${inputRef.current.scrollHeight + 10}px`
      }
    }
  }, [newMessage])
  console.log(inputRef.current?.value)
  return (
    <div
      className="w-full bg-gray-950 px-3 py-4 flex items-center"
    >
      <div className={`relative w-full min-w-[200px] flex items-center`}>
        {showPicker && 
          <div className="absolute bottom-full right-0">
            <EmojiPicker onEmojiClick={onEmojiClick} theme={Theme.DARK}/>
          </div>
        }
        <textarea
          ref={inputRef}
          onChange={(e) => handleChange(e)}
          onKeyDown={handleKeyDown}
          value={newMessage}
          className={`peer w-full resize-none overflow-hidden block rounded-[7px] border border-blue-200 border-t-transparent bg-transparent pl-3 pr-20 py-2.5 overflow-x-hidden text-md font-normal text-blue-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-50`}
          placeholder=""
          style={{height: '48px'}}
        />
        <HappyProvider>
          <Button_Antd
            ref={sendBtnRef}
            shape="circle"
            size="large"
            className="absolute right-2 text-black font-bold flex justify-center items-center border-none bg-[rgb(81,252,91)] "
            onClick={handleSend}
          >
            <img className="w-5 h-5" src="/icons/send.svg"/>
          </Button_Antd>
          <Button_Antd
            shape="circle"
            size="large"
            className="absolute right-12 text-black font-bold flex justify-center items-center border-none bg-transparent "
            onClick={() => setShowPicker(val => !val)}
          >
            <img className="w-7 h-7" src="/icons/emoji-smile.svg"/>
          </Button_Antd>
        </HappyProvider>
        <label className="flex before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-md font-normal leading-tight text-blue-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-200 after:transition-all peer-placeholder-shown:text-md peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-xs peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-500">
          Type your message here...
        </label>
      </div>
    </div>
  )
}

export default ChattingEditor;
