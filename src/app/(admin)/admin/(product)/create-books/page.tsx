"use client";
import {
  Button,
  InputForm,
  MarkdownEditor,
  LoadingWhenChangePage,
} from "@/components";
import { FC, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { apiGetCategoryBooks, apiCreateBook } from "@/api";
import { ICategory } from "@/utils/interface";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "@/utils/icon";
import { toast } from "react-toastify";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { showModel } from "@/redux/app";
import { useRouter } from "next/navigation";
import path from "@/utils/path";

interface FormData {
  title: string;
  price: number;
  category: Array<{ title: string; slug: string }>;
  image: { 0: File; length: number };
  available: number;
}

interface Options {
  title: string;
  slug: string;
}

const Page: FC = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState<ICategory | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [payload, setPayload] = useState<{ description: string }>({
    description: "",
  });
  const fetchCategories = async () => {
    const resopnse = await apiGetCategoryBooks();
    if (resopnse.data.error === 0) setCategories(resopnse.data);
  };
  const handleCreateBook = async (data: object) => {
    const category = watch(["category"])[0].map((el) => el.slug);
    const finalPayload = { ...data, ...payload };
    const formData = new FormData();
    for (let i of Object.entries(finalPayload)) formData.append(i[0], i[1]);

    formData.append("image", watch("image")[0]);
    const categoryString = category.join(",");
    formData.set("category", categoryString);

    dispatch(
      showModel({ isShowModel: true, modelChildren: <LoadingWhenChangePage /> })
    );
    const response = await apiCreateBook(formData);
    dispatch(showModel({ isShowModel: false, modelChildren: null }));
    if (response.data.error === 0) {
      toast.success(response.data.mes);
      router.push(`/${path.ADMIN}/${path.MANAGE_BOOKS}?page=1`);
    } else toast.error(response.data.mes);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const handlePreview = async (file: File) => {
    if (file) {
      if (file.type === "image/jpeg" || file.type === "image/png") {
        const reader = new FileReader();
        const blob = new Blob([file]);
        reader.readAsDataURL(blob);
        reader.onload = () => {
          const previewImageString = reader?.result?.toString();
          setPreview(previewImageString || null);
        };
      } else return toast.warning("file not support");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  //show preview image
  useEffect(() => {
    if (watch("image").length > 0) handlePreview(watch("image")[0]);
  }, [watch(["image"])[0]]);

  //options categories
  const options: Options[] | undefined = categories?.data?.map((el) => ({
    slug: el.slug,
    title: el.title,
  }));

  return (
    <>
      <div className="w-full p-8">
        <form onSubmit={handleSubmit(handleCreateBook)} className=" grid gap-8">
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

export default Page;
