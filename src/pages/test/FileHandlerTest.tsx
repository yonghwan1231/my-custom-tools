import { useFileHandler } from '@hooks'

export const FileHandlerTest = () => {
  const { FileUploader, fileData, deleteFile } = useFileHandler({ length: 6 })

  return (
    <main id="fileTest" className="container">
      <ul>
        {fileData.map((item, index) => (
          <li>
            <button
              className="btn_delete_img"
              data-index={index}
              onClick={deleteFile}
            >
              &times;
            </button>
            <img src={item?.fileUrl} alt="" />
          </li>
        ))}
      </ul>

      <label htmlFor="file">
        파일 업로드
        <FileUploader id="file" />
      </label>
    </main>
  )
}
