import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function App() {
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (value) => console.log(value);

  useEffect(() => {
    console.log("Updating");
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        {errors.firstName?.message}
        <input {...register("lastName")} placeholder="Last Name" />
        {errors.lastName?.message}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
