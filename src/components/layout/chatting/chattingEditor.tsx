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
  }
  const onEmojiClick = (emojiObject: { emoji: string }) => {
    setNewMessage(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  const handleKeyDown = (event:KeyboardEvent) => {
    if (event.key === 'Enter') {
      sendBtnRef.current?.click();
      event.preventDefault();
    }
  };
  const handleSend = () => {
    if(newMessage != '') {
      setChattingLog(
        [...chattingLog,
          {
            id: `01`,
            user: 'User 01',
            avatar: '/images/user01.svg',
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
      if(newMessage.length) {
        inputRef.current.style.height = `${inputRef.current.scrollHeight + 10}px`
      }
    }
  }, [newMessage])
  return (
    <div
      className="w-full bg-[#232329] px-3 py-4 flex items-center"
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
          className={`peer w-full bg-[#151517] resize-none overflow-hidden items-center block rounded-md pl-3 pr-20 pt-3.5 overflow-x-hidden text-xl font-normal text-[#909EAB] outline outline-0 focus:outline-0 disabled:border-0 disabled:bg-blue-50`}
          placeholder=""
          // style={{height: '48px'}}
        />
        <HappyProvider>
          <Button_Antd
            ref={sendBtnRef}
            shape="circle"
            size="large"
            className="absolute right-2 text-black font-bold flex justify-center items-center border-none bg-[linear-gradient(164deg, #9CFC00 0%, #00FC92 78.96%) bg-gradient-to-br from-[#9CFC00] to-[#00FC92] "
            onClick={handleSend}
          >
            <img className="w-6 h-6" src="/icons/send.svg"/>
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
        <label style={{fontFamily: 'Montserrat'}} className="flex before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-md leading-tight text-[#7E8792] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:transition-all peer-placeholder-shown:text-md peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-400 peer-focus:text-xs peer-focus:leading-tight peer-focus:text-gray-300peer-focus:before:border-l-2   peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-400">
          Type your message
        </label>
      </div>
    </div>
  )
}

export default ChattingEditor;
