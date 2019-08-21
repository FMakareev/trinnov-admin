import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
} from "shards-react";
import ImageField from "../ImageField/ImageField";
import {Field} from "react-final-form";

const ArticleHeadImage = () => {
  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Head image</h6>
      </CardHeader>
      <CardBody>
        <Field
          name={'head_image'}
        >
          {
            (props)=>(
              <ImageField {...props}/>)
          }
        </Field>
      </CardBody>
    </Card>
  );
}


export default ArticleHeadImage;
