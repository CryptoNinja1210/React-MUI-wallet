import { 
  useState 
} from "react";
import ChattingEditor from "./chattingEditor";
import ChattingHeader from "./chattingheader";
import ChattingPane from "./chattingpane";

const chattingHistory = [
  {
    id: '01',
    user: 'User 01',
    avatar: '/images/user01.svg',
    message: 'This is message_000.',
    time: new Date('2022.07.07 00:00:00')
  },
  {
    id: '04',
    user: 'User 04',
    avatar: '/images/user04.svg',
    message: 'This is message_001.',
    time: new Date('2023.08.013 12:05:00')
  },
  {
    id: '25',
    user: 'User 25',
    avatar: '/images/user25.svg',
    message: 'This is message_002.',
    time: new Date('2023.08.013 12:07:00')
  },
  {
    id: '27',
    user: 'User 27',
    avatar: '/images/user27.svg',
    message: 'This is message_003.',
    time: new Date('2023.08.013 12:09:00')
  },
  {
    id: '82',
    user: 'User 82',
    avatar: '/images/user82.svg',
    message: 'This is message_004.',
    time: new Date('2023.08.013 12:10:00')
  },
  {
    id: '01',
    user: 'User 01',
    avatar: '/images/user01.svg',
    message: 'I am User 01, React & Next.js developer.',
    time: new Date('2023.08.013 12:11:00')
  },
  {
    id: '04',
    user: 'User 04',
    avatar: '/images/user04.svg',
    message: 'This is message_006.',
    time: new Date('2023.08.013 12:12:00')
  },
  {
    id: '01',
    user: 'User 01',
    avatar: '/images/user01.svg',
    message: 'https://join.skype.com/invite/q7kutPqmW3gp',
    time: new Date('2023.08.013 12:13:00')
  },
  {
    id: '04',
    user: 'User 04',
    avatar: '/images/user04.svg',
    message: 'petj.ring@gmail.com',
    time: new Date('2023.08.013 12:14:00')
  },
  {
    id: '25',
    user: 'User 25',
    avatar: '/images/user25.svg',
    message: 'This is message_009.',
    time: new Date('2023.08.013 12:15:00')
  },
  {
    id: '27',
    user: 'User 27',
    avatar: '/images/user27.svg',
    message: 'https://t.me/SweetCoding',
    time: new Date('2023.08.013 12:16:00')
  },
  {
    id: '82',
    user: 'User 82',
    avatar: '/images/user82.svg',
    message: 'This is message_011.',
    time: new Date('2023.08.013 12:17:00')
  },
]

interface chattingBox {
  showMessage: boolean;
  setShowMessage: (showMessage: boolean) => void;
}

const ChattingBox = ({showMessage, setShowMessage}: chattingBox) => {
  const [chattingLog, setChattingLog] = useState(chattingHistory);
  return (
    <div className={`${showMessage ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed bottom-5 right-5 h-[calc(100vh-230px)] w-[400px] bg-gray-800 rounded-xl transition-all duration-700 ease-in-out flex flex-col justify-between`}>
      <ChattingHeader setShowMessage={setShowMessage}/>
      <ChattingPane className="h-auto" chattingLog={chattingLog} />
      <ChattingEditor
        chattingLog={chattingLog}
        setChattingLog={setChattingLog}
      />
    </div>
  )
}

export default ChattingBox;
