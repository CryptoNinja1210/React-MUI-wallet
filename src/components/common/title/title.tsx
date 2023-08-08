import './style.css';


interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subTitle
}) =>{
  return (
    <div className='sectionTitle'>
      <h2 className='title'>
        {title}
      </h2>
      <p>{subTitle}</p>
    </div>
  )
}

export default SectionTitle;


