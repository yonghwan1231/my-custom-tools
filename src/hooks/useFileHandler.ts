import { useState } from 'react'
// import { v4 as uuidv4 } from "uuid";
import { FileInput } from '@components'
import { messages } from '@constants'

const fileExtensions = {
  image: ['jpg', 'jpeg', 'png', 'gif'],
  excel: ['xlsx'],
}

const defaultOption: Required<TFile.Options> = {
  id: '',
  type: 'image',
  size: 1,
  length: 1,
}

export const useFileHandler = (options?: TFile.Options) => {
  const { type, size, length } = { ...defaultOption, ...options }
  const [fileData, setFileData] = useState<TFile.FileItem[]>([])
  const allowedExtensions = type ? fileExtensions[type] : ''

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return
    const copy = [...fileData]
    for (let index = 0; index < e.target.files.length; index++) {
      const file = e.target.files[index]
      const fileObj = {
        file,
        fileUrl: URL.createObjectURL(file),
        originalFileName: file.name,
        // fileName: uuidv4(),
        fileExtension: file.name.split('.').pop()?.toLowerCase() as string,
        fileSize: file.size,
        index,
      }
      if (type && !allowedExtensions.includes(fileObj.fileExtension)) {
        return alert(allowedExtensions + messages.alert.fileExtensions)
      }
      if (size && file.size > size * 1024000) {
        return alert(size + messages.alert.fileSize)
      }
      if (length !== 1 && copy.length >= length) {
        return alert(length + messages.alert.fileLength)
      }
      if (length === 1) {
        return setFileData([fileObj])
      } else {
        copy.push(fileObj)
      }
    }
    setFileData(copy)
  }

  const deleteFile = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const copy = [...fileData]
    const index = Number(e.currentTarget.dataset.index)
    copy.splice(index, 1)
    setFileData(copy)
  }

  const FileUploader = FileInput({
    uploadFile,
    multiple: length > 1 ? true : false,
  })

  return {
    FileUploader,
    fileData,
    setFileData,
    deleteFile,
  }
}
