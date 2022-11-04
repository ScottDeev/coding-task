// import { data } from "../assests/Data"
import nft from '../assests/image/nft.jpg'
import ninja from '../assests/image/ninja.jpg'
import coin from '../assests/image/coin.jpg'
import crypto from '../assests/image/crypto.jpg'
import meta from '../assests/image/meta.jpg'
import metaa from '../assests/image/metaa.jpg'
import earn from '../assests/image/earn.jpg'
import king from '../assests/image/king.jpg'
import design from '../assests/image/design.jpg'
import projects from '../assests/image/projects.jpg'
import { useState } from 'react'
import { DndContext, closestCenter,  } from "@dnd-kit/core"
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { SortableItems } from './DragNDrop/SortableItems'
export default function List() {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Rune raises $100,000 for marketing through NFT butterflies sale',
      author: 'ninjanft',
      likes: 254,
      authorIcon: ninja,
      displayImage: nft
    },
    {
      id: 2,
      title: 'The Cryptocurrency Trading Bible',
      author: 'deniscrypto',
      likes: 302,
      authorIcon: crypto,
      displayImage: coin
    },
    {
      id: 3,
      title: 'Designing our new company brand: Meta',
      author: 'meta_world98',
      likes: 134,
      authorIcon: metaa,
      displayImage: meta
    },
    {
      id: 4,
      title: 'Connect media partners, earn exciting rewards  for today',
      author: 'kingdom43world',
      likes: 99,
      authorIcon: king,
      displayImage: earn
    },
    {
      id: 5,
      title: 'Designing a more effective proejcts',
      author: 'sjkj3987423kjbdfsf',
      likes: 88,
      authorIcon: design,
      displayImage: projects
    }
  ])
  function handleDragEnd(e){
    const {active, over} = e
    if(active.id !== over.id){
      setData((items) => {
        console.log(items);
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex)
      })
    }
  }
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col gap-[25px] mt-[100px]">
        <SortableContext
          items={data}
          strategy={verticalListSortingStrategy}
        >
          {data.map(data => (
            <SortableItems key={data.id} data={data} id={data}/>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  )
}