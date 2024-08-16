import { useRef } from 'react'

type OwnProps = {
  uploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void
  multiple: boolean
}

export const FileInput = ({ uploadFile, multiple }: OwnProps) => {
  const fileRef = useRef(null)

  return ({ id }: { id: string }) => (
    <input
      id={id}
      ref={fileRef}
      type="file"
      className="hidden"
      onChange={(e) => {
        uploadFile(e)
        fileRef.current = null
      }}
      multiple={multiple}
    />
  )
}
