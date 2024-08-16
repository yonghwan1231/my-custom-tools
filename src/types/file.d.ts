declare namespace TFile {
  type Options = {
    id?: string
    type?: 'image' | 'excel'
    size?: number
    length?: number
  }

  type FileItem = {
    file?: File
    fileUrl: string
    originalFileName: string
    // fileName: string; // uuid 필요 시 해제
    fileExtension: string
    fileSize: number
    fileId?: string
  }

  namespace API {
    type GetConnectedFiles = (id: number) => Promise<FileItem[]>

    type ConnectFilesToPost = (
      fileData: FileItem[],
      id: number,
      method: string,
    ) => Promise<void>

    type UploadFileToServer = (
      type: string,
      id: string,
      method: string,
    ) => Promise<void>
  }
  namespace Request {}

  namespace Response {}
}
