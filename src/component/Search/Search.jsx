import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Col } from "antd";

import "./Search.css"

const Search = (props) => {
  const { handleSubmit, watch, control } = useForm();
  const onSubmit = (data) => {
    props.imageBySearch(data.img);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
    

  };
  

  return (
    <div className="search">
    <Form  onSubmitCapture={handleSubmit(onSubmit)}>
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