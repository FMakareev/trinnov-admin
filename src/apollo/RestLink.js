import {RestLink} from "apollo-link-rest";
import {Config} from "../config";
import {APOLLO_TYPES} from "./Types";
import {MultipartFormData} from "./bodySerializers/MultipartFormData";


export const AppRestLink = new RestLink({
  uri: Config.endpoint.base,
  responseTransformer: async (response, outerType) => {
    return response.json()
      .then((response) => {
        if (Array.isArray(response.results)) {
          return response.results.map((item) => ({
            ...item,
            __count: response.count,
            __next: response.next,
            __previous: response.previous,

            __meta: {
              count: response.count,
              next: response.next,
              previous: response.previous,
            },
          }))
        }
        if (outerType === APOLLO_TYPES.News) {

          if (response.content) {
            try {
              response.content = JSON.parse(response.content);
              return response;
            } catch (e) {
              return response;
            }
          }

          return response;
        }
        return response;
      })
  },

  bodySerializers: {
    formData: MultipartFormData
  },
  typePatcher: {
    [APOLLO_TYPES.News]: (data, outerType,) => ({
      ...data,
      __typename: outerType
    }),
  }
});
