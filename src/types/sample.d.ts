declare namespace TSample {
  namespace API {
    type GetData = (queryParams: string, perPage: number) => void
    type PatchData = (id: string, data: Partial<Request.PatchData>) => void
    type DeleteData = (id: string, data: Partial<Request.DeleteData>) => void
  }

  namespace Request {
    type GetData = { [key: string]: unknown }
    type PatchData = { [key: string]: unknown }
    type DeleteData = { [key: string]: unknown }
  }

  namespace Response {
    type GetData = { [key: string]: unknown }
    type PatchData = { [key: string]: unknown }
    type DeleteData = { [key: string]: unknown }
  }
}
