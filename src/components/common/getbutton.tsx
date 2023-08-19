interface GetButtonProps {
  name: string;
}

const GetButton: React.FC<GetButtonProps> = ({
  name
}) =>{
  return (
    <div
      className="flex justify-satrt items-center relative z-50"
    >
      <div
        className="flex justify-center items-center bg-[#00FC65] gap-2 rounded-full p-auto w-[169px] h-12 group hover:drop-shadow-glow"
      >
        <p
          style={{fontFamily: 'Syne-Bold'}}
          className="text-[#0A0A0B] text-center text-[14px] leading-normal"
        >
          {name}
        </p>
        <div>
          <img src="icons/arrow2.png" className="w-[18px] h-[14px] group-hover:rotate-45" alt="" />
        </div>
      </div>
    </div>
  )
}

export default GetButton;


