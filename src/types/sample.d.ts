declare namespace TSample {
  namespace getSampleData {
    type Request = { [key: string]: unknown }
    type Response = { [key: string]: unknown }
    type Controller = (queryParams: string, perPage: number) => void
  }
}
