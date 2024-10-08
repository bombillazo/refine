import React from "react";
import { Edit } from "@refinedev/chakra-ui";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
} from "@chakra-ui/react";
import { useForm } from "@refinedev/react-hook-form";
import { useSelect } from "@refinedev/core";

export const BlogPostEdit = () => {
  const {
    refineCore: { formLoading, query: queryResult },
    saveButtonProps,
    register,
    resetField,
    formState: { errors },
  } = useForm();

  const blogPostsData = queryResult?.data?.data;

  const { options: categoryOptions } = useSelect({
    resource: "categories",
    defaultValue: blogPostsData?.category?.id,
  });

  React.useEffect(() => {
    resetField("category.id");
  }, [categoryOptions]);

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <FormControl mb="3" isInvalid={!!(errors as any)?.id}>
        <FormLabel>Id</FormLabel>
        <Input
          disabled
          type="number"
          {...register("id", {
            required: "This field is required",
            valueAsNumber: true,
          })}
        />
        <FormErrorMessage>
          {(errors as any)?.id?.message as string}
        </FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!(errors as any)?.title}>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          {...register("title", {
            required: "This field is required",
          })}
        />
        <FormErrorMessage>
          {(errors as any)?.title?.message as string}
        </FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!(errors as any)?.content}>
        <FormLabel>Content</FormLabel>
        <Input
          {...register("content", {
            required: "This field is required",
          })}
        />
        <FormErrorMessage>
          {(errors as any)?.content?.message as string}
        </FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!errors?.category}>
        <FormLabel>Category</FormLabel>
        <Select
          placeholder="Select category"
          {...register("category.id", {
            required: "This field is required",
          })}
        >
          {categoryOptions?.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <FormErrorMessage>
          {(errors as any)?.category?.id?.message as string}
        </FormErrorMessage>
      </FormControl>
      <FormControl mb="3" isInvalid={!!(errors as any)?.status}>
        <FormLabel>Status</FormLabel>
        <Input
          type="text"
          {...register("status", {
            required: "This field is required",
          })}
        />
        <FormErrorMessage>
          {(errors as any)?.status?.message as string}
        </FormErrorMessage>
      </FormControl>
      {/* 
                    DatePicker component is not included in "@refinedev/chakra-ui" package.
                    To use a <DatePicker> component, you can examine the following links:
                    
                    - https://github.com/aboveyunhai/chakra-dayzed-datepicker
                    - https://github.com/wojtekmaj/react-date-picker
                */}
      <FormControl mb="3" isInvalid={!!(errors as any)?.createdAt}>
        <FormLabel>Created At</FormLabel>
        <Input
          {...register("createdAt", {
            required: "This field is required",
          })}
        />
        <FormErrorMessage>
          {(errors as any)?.createdAt?.message as string}
        </FormErrorMessage>
      </FormControl>
    </Edit>
  );
};
