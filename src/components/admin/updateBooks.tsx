import { IBook, ICategory } from "@/utils/interface";
import { Dispatch, FC, SetStateAction, memo, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "react-toastify";
import { apiUpdateBook } from "@/api";
import { showModel } from "@/redux/app";

interface FormData {
  title: string;
  price: number;
  category: Array<{ title: string; slug: string }>;
  image: { 0: File; length: number };
  available: number;
}

interface PageProps {
  data: IBook;
  render: Dispatch<SetStateAction<boolean>>;
  setEditData: Dispatch<SetStateAction<IBook | null>>;
}

type Options = { slug: string; title: string }[] | undefined;

const Page: FC<PageProps> = ({ data, render, setEditData }) => {
  const { Categories } = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<FormData>();
  const [payload, setPayload] = useState({ description: data.description });
  const [preview, setPreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<ICategory | null>(null);
  const [select, setSelect] = useState<{ title: string; slug: string }[]>(
    data.category.map((el) => ({ title: el, slug: el }))
  );

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
  const handleUpdateBook = async (arg: any) => {
    const CategoriesDto = select.map((el) => el.slug);
    const finalPayload = { ...payload, ...arg, category: CategoriesDto };
    const formData = new FormData();
    for (let i of Object.entries(finalPayload))
      formData.append(i[0], i[1] as string);
    if (watch("image").length > 0) {
      formData.set("image", watch("image")[0]);
    } else formData.delete("image");

    dispatch(
      showModel({ isShowModel: true, modelChildren: <LoadingWhenChangePage /> })
    );
    await apiUpdateBook(formData, data._id).then((rs) => {
      dispatch(showModel({ isShowModel: false, modelChildren: null }));
      render((prev) => !prev);
      if (rs.data.error === 0) {
        toast.success("Success");
        render((prev) => !prev);
        setEditData(null);
      } else toast.error("Something went wrong !");
    });
  };

  useEffect(() => {
    if (Categories) setCategories(Categories);
  }, []);

  useEffect(() => {
    if (watch("image").length > 0) handlePreview(watch("image")[0]);
  }, [watch("image")]);

  const option: Options = categories?.data?.map((el) => ({
    slug: el.slug,
    title: el.title,
  }));

  return (
    <>
      <div className="w-full bg-white p-8">
        <div className="flex justify-between">
          <h1 className="text-[4rem] font-bold mb-8">Update Books</h1>
          <div className="bg-red px-4 rounded-md items-center flex h-[4rem]">
            <span
              className="text-white text-[1.4rem] font-semibold cursor-pointer"
              onClick={() => setEditData(null)}
            >
              Cancel
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleUpdateBook)} className="grid gap-8">
          <div>
            <InputForm
              label="Name Book"
              id="title"
              fullW
              register={register}
              errors={errors?.title?.message}
              placeholder="Enter your book..."
              validate={{ required: "Missing name book" }}
              defaultValue={data.title}
            />
          </div>
          <div className="grid grid-flow-col justify-stretch gap-x-8">
            <div className="flex flex-col">
              <InputForm
                id="price"
                type="number"
                defaultValue={data.price}
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
                defaultValue={data.available}
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
                name="category"
                render={({ field: { onBlur } }) => (
                  <Select
                    id="category"
                    defaultValue={data.category.map((el) => ({
                      slug: el,
                      title: el,
                    }))}
                    options={option}
                    isMulti
                    onChange={(e: any) => setSelect(e)}
                    onBlur={onBlur}
                    getOptionValue={(e) => e.slug}
                    getOptionLabel={(e) => e.title}
                  />
                )}
              />
            </div>
          </div>
          <MarkdownEditor
            label="Description"
            changeValue={setPayload}
            name="description"
            defaultValue={data.description}
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
                {...register("image")}
                className="hidden"
              />

              <div className="w-[40rem] h-[40rem] mt-8 block">
                <Image
                  src={preview ? preview : data.image.path}
                  width={198}
                  height={123}
                  alt="image"
                />
              </div>
            </div>
          </div>
          <Button name="Update" type="submit" status w25 />
        </form>
      </div>
    </>
  );
};

export default memo(Page);
