import React from 'react'

const SectionDetail = ({params }: {params: {noteId: string, sectionId: string}}) => {
  return (
    <div>
    Note id {params.noteId}<br/>
     Section Detail {params.sectionId}
    </div>
  )
}

export default SectionDetail
