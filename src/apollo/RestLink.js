import {RestLink} from "apollo-link-rest";
import {Config} from "../config";
import {APOLLO_TYPES} from "./Types";
import {MultipartFormData} from "./bodySerializers/MultipartFormData";


export const AppRestLink = new RestLink({
  uri: Config.endpoint.base,

  responseTransformer: async response => {
    console.log(response);
    return response.json()
      .then((response) => response.results.map((item) => ({
        ...item,
        __count: response.count,
        __next: response.next,
        __previous: response.previous,

        __meta: {
          count: response.count,
          next: response.next,
          previous: response.previous,
        },
      })))
  },

  bodySerializers: {
    formData: MultipartFormData
  },
  typePatcher: {
    [APOLLO_TYPES.News]: (data, outerType, patchDeeper) => {
      console.log('typePatcher: ', data);
      console.log('outerType: ', outerType);

      return {
        ...data,
        __typename: outerType
      };
    },
  }
});
