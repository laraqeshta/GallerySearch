import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button } from "antd";

import "./Search.css";

const Search = (props) => {
  const { handleSubmit, watch, control } = useForm();
  const onSubmit = (data) => {
    props.imageBySearch(data.img);
  };

  return (
    <div className="search">
      <Form onSubmitCapture={handleSubmit(onSubmit)}>
        <Controller
          name="img"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <Button type="primary" htmlType="submit" className="butSearch">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Search;
