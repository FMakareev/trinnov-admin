import React from "react";


export const usePagination = () => {
  const [state, setState] = React.useState({
    pageCount: 0,
    offset: 0,
    perPage: 20
  });

  return [state, (offset) => {
    setState({
      ...state,
      offset,
    })
  }]
};

export default usePagination
