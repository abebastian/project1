import { notFound } from 'next/navigation'
import { Metadata } from "next";

type Props={
  params: {
    noteId: string
}}

export const generateMetadata=  ({params}: Props): Metadata => {
  return {
    title: `Note ${params.noteId}`, 
    description: `This is note ${params.noteId}`,
  
  }
}

const Note = ({params }: Props) => {
  if(parseInt(params.noteId) % 2 == 0){
    notFound()
  }
  return (
    <div>
      
      Note Detail {params.noteId}
    </div>
  )
}

export default Note
