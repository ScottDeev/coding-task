import { data } from "../assests/Data"
import arrowIcon from '../assests/image/arrow.svg'
export default function List() {
  return (
    <div className="flex flex-col gap-[25px] mt-[100px]">
      {data.map(data => (
        <div key={data.id} className="flex w-full gap-[45px] text-white border border-grey-500 py-[16px] px-[24px] rounded-[16px]">
          <div className="flex w-[40%] gap-[20px] items-center">
            <span>0{data.id}</span>
            <img src={data.displayImage} alt="image" />
            <h2>{data.title}</h2>
          </div>
          <div className="w-[30%] flex gap-[5px] items-center">
            <div>

            <img className="h-[20px] w-[20px] rounded-[50%]" src={data.authorIcon} alt="author" />
            </div>
            <p>{data.author}</p>
          </div>
          <div className="w-[30%] flex justify-end items-center gap-[10px]">
            <span>{data.likes}</span>
            <img src={arrowIcon} alt="arrow" />
          </div>
        </div>
      ))}
    </div>
  )
}