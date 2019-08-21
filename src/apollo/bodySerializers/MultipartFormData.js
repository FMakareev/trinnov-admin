

export const MultipartFormData =  (data, headers) => {
  const formData = new FormData();
  for (let key in data) {
    if (data.hasOwnProperty(key) && data[key]) {
      formData.append(key, data[key]);
    }
  }
  return { body: formData, headers };
};
