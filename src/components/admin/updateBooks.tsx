import { IBook } from "@/utils/interface";
import { FC, memo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  InputForm,
  MarkdownEditor,
  LoadingWhenChangePage,
} from "@/components";
import icon from "@/utils/icon";
import Image from "next/image";

interface PageProps {
  data: IBook;
  render: boolean;
}

interface Options {
  title: string;
  slug: string;
}

const Page: FC<PageProps> = ({ data, render }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<IBook>();
  const [payload, setPayload] = useState<any>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const options: Options[] | undefined = [{ title: "1", slug: "1" }];
  const handleUpdateBook = async (data: object) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full h-full bg-white">
        <h1 className="text-[4rem] font-bold mb-8">Update Books</h1>
        <form onSubmit={handleSubmit(handleUpdateBook)} className=" grid gap-8">
          <h1 className="text-[4rem] font-bold mb-8">Create Books</h1>
          <div>
            <InputForm
              label="Name Book"
              id="title"
              fullW
              register={register}
              errors={errors?.title?.message}
              placeholder="Enter your book..."
              validate={{ required: "Missing name book" }}
            />
          </div>
          <div className="grid grid-flow-col justify-stretch gap-x-8">
            <div className="flex flex-col">
              <InputForm
                id="price"
                type="number"
                register={register}
                errors={errors?.price?.message}
                label="Price"
                placeholder="Price..."
                validate={{
                  required: "Missing price book",
                  valueAsNumber: true,
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "invalid input",
                  },
                }}
              />
            </div>
            <div className="flex flex-col">
              <InputForm
                id="available"
                register={register}
                errors={errors?.available?.message}
                label="Available"
                type="number"
                placeholder="Available..."
                validate={{
                  required: "Missing available book",
                  valueAsNumber: true,
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "invalid input",
                  },
                }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold tracking-wider">Category</h1>
            <div className="mt-4 border-2 border-gray-500 text-[1.6rem] z-40">
              <Controller
                control={control}
                rules={{ required: "Missing input" }}
                name="category"
                render={({ field: { onBlur, onChange } }) => (
                  <Select
                    id="category"
                    options={options}
                    isMulti
                    onChange={(e: any) => onChange(e)}
                    onBlur={onBlur}
                    getOptionValue={(e) => e.slug}
                    getOptionLabel={(e) => e.title}
                  />
                )}
              />
            </div>
            {errors["category"] && (
              <span className="text-red font-semibold text-base">
                {errors["category"]?.message}
              </span>
            )}
          </div>
          <MarkdownEditor
            label="Description"
            changeValue={setPayload}
            name="description"
          />
          <div className="flex flex-col">
            <div className="w-full">
              <span className="text-2xl font-semibold tracking-wider">
                Upload image
              </span>
              <label
                className="text-2xl font-semibold tracking-wider bg-red text-white w-1/4 py-4 
                px-2 rounded-xl flex items-center justify-center cursor-pointer mt-8"
                htmlFor="image"
              >
                <FontAwesomeIcon
                  icon={icon.faUpload}
                  className="text-white mr-4"
                />
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                {...register("image", { required: "need fill" })}
                className="hidden"
              />
              {errors["image"] && (
                <small className="text-red font-semibold text-base">
                  {errors["image"]?.message}
                </small>
              )}
              {preview && (
                <div className="w-[20rem] h-[20rem] mt-8">
                  <Image src={preview} width={198} height={123} alt="image" />
                </div>
              )}
            </div>
          </div>
          <Button name="create" type="submit" status w25 />
        </form>
      </div>
    </>
  );
};

export default memo(Page);
