import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import arrowIcon from '../../assests/image/arrow.svg'

export function SortableItems({data, id}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({id: id})

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  return(
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div key={data.id} className="flex w-full gap-[45px] text-white border border-grey-500 py-[16px] px-[24px] rounded-[16px]">
            <div className="flex w-[40%] gap-[20px] items-center">
              <span>0{data.id}</span>
              <img src={data.displayImage} alt="image" />
              <h2 className="font-[100]">{data.title}</h2>
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
    </div>
  )
}