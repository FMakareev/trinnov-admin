

export const MultipartFormData =  (data, headers) => {
  const formData = new FormData();
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key]);
    }
  }
  headers.set("Content-Type", "multipart/form-data");
  return { body: formData, headers };
};
