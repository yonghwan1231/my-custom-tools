declare namespace TWeather {
  namespace GetWeaterData {
    type Request = { [key: string]: unknown }
    type Response = { [key: string]: unknown }
    type Controller = () => Response
  }
}
