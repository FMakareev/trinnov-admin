import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
} from "shards-react";
import ImageField from "../ImageField/ImageField";
import {Field} from "react-final-form";

const ArticleHeadImage = ({
                            name = 'head_image',
                            title = 'Head image'

                          }) => {
  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">
          {title}
        </h6>
      </CardHeader>
      <CardBody>
        <Field
          name={name}
        >
          {
            (props) => (
              <ImageField {...props}/>)
          }
        </Field>
      </CardBody>
    </Card>
  );
};


export default ArticleHeadImage;
