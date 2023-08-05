"use client";
import { apiUpdateCurrent } from "@/api";
import { Button, InputForm, LoadingWhenChangePage } from "@/components";
import { showModel } from "@/redux/app";
import { AppDispatch, RootState } from "@/redux/store";
import { getUserCurrent } from "@/redux/user/asyncAction";
import moment from "moment";
import Image from "next/image";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  avatar: { 0: File; length: number };
}

const Page: FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { current } = useSelector((state: RootState) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
  } = useForm<FormData>();

  useEffect(() => {
    reset({
      firstName: current?.firstName,
      lastName: current?.lastName,
      email: current?.email,
    });
  }, [current]);

  const handleUpdateUser = async (data: object) => {
    const formData = new FormData();
    for (let i of Object.entries(data)) formData.append(i[0], i[1] as string);
    if (watch("avatar").length > 0) formData.set("avatar", watch("avatar")[0]);
    else formData.delete("avatar");
    dispatch(
      showModel({ isShowModel: true, modelChildren: <LoadingWhenChangePage /> })
    );
    await apiUpdateCurrent(formData).then((rs) => {
      if (rs.data.error === 0) {
        dispatch(getUserCurrent());
        dispatch(showModel({ isShowModel: false, modelChildren: null }));
        toast.success(rs.data.mes);
      } else toast.error(rs.data.mes);
    });
  };

  return (
    <>
      <div className="w-full p-8">
        <div className="border-b w-full">
          <h1 className="text-[4rem] font-bold mb-8">Personal</h1>
        </div>
        <div className="w-1/2 mx-auto mt-12">
          <form
            onSubmit={handleSubmit(handleUpdateUser)}
            className=" flex flex-col gap-y-10"
          >
            <div>
              <InputForm
                validate={{ required: "Missing firstname" }}
                id="firstName"
                register={register}
                errors={errors.firstName?.message}
                label="firstname"
                fullW
              />
            </div>
            <div>
              <InputForm
                validate={{ required: "Missing lastname" }}
                id="lastName"
                register={register}
                errors={errors.lastName?.message}
                label="lastname"
                fullW
              />
            </div>
            <div>
              <InputForm
                validate={{
                  required: "Missing email",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "email invalid",
                  },
                }}
                id="email"
                register={register}
                errors={errors.email?.message}
                label="email"
                fullW
              />
            </div>
            <span className="text-2xl font-semibold tracking-wider flex">
              Account status:
              {current?.isBlocked === true ? (
                <p className="ml-4 text-red"> Blocked </p>
              ) : (
                <p className="ml-4 text-green-500"> Actived </p>
              )}
            </span>
            <span className="text-2xl font-semibold tracking-wider flex">
              Role:
              {current?.role === "admin" ? (
                <p className="ml-4">Admin</p>
              ) : (
                <p className="ml-4">User</p>
              )}
            </span>
            <span className="text-2xl font-semibold tracking-wider flex">
              Created At: {moment(current?.createdAt).fromNow()}
            </span>
            <label htmlFor="avatar" className="cursor-pointer w-1/6">
              <label className="text-2xl font-semibold tracking-wider mb-4 block">
                Profile:
              </label>
              <Image
                src={
                  current?.avatar !== null
                    ? current?.avatar
                    : "/avatarDefault.png"
                }
                width={50}
                height={50}
                alt="avatar"
              />
            </label>
            <input
              type="file"
              id="avatar"
              {...register("avatar")}
              className="hidden"
            />
            <div className="flex justify-end">
              <Button
                status={isDirty ? true : false}
                name="Update"
                type="submit"
                w25
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
