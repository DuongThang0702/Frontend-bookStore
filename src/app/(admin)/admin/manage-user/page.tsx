"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { apiGetUsers, apiUpdateUserByAdmin, apiDeleteUser } from "@/api";
import { UserCurrent, UserData } from "@/utils/interface/IUser";
import {
  Button,
  InputField,
  Pagination,
  InputForm,
  SelectForm,
} from "@/components";
import useDebounce from "@/hooks/useDebounce";
import { useSearchParams } from "next/navigation";
import moment from "moment";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

interface UsersData {
  Users?: Array<UserData>;
  count: number;
}

interface FormData {
  _id: string;
  email: string;
  lastName: string;
  firstName: string;
  role: string;
  isBlocked: boolean;
}

const Page: FC = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const searchParams = useSearchParams();
  const page: string | null = searchParams.get("page");
  const [editData, setEditData] = useState<UserCurrent | null>(null);
  const [queries, setQueries] = useState<{ q: string }>({ q: "" });
  const [users, setUsers] = useState<UsersData | null>(null);
  const [update, setUpdate] = useState<boolean>(false);

  const fetchUserData = async (params?: { q?: string }) => {
    const response = await apiGetUsers({
      ...params,
      limit: parseInt(process.env.NEXT_PUBLIC_LIMIT as string),
      page,
    });
    if (response.data.error === 0) setUsers(response.data);
  };

  const render = useCallback(() => setUpdate(!update), [update]);
  const queriesDebounce = useDebounce(queries.q, 800);
  useEffect(() => {
    const params: { q?: string } = {};
    if (queriesDebounce) params.q = queriesDebounce;
    fetchUserData(params);
  }, [queriesDebounce, page, update]);

  const handleUpdate = async (data: FormData) => {
    const response = await apiUpdateUserByAdmin(data, editData?._id);
    if (response.data.error === 0) {
      render();
      setEditData(null);
      toast.success(response.data.mes);
    } else toast.error(response.data.mes);
  };

  const handleDeleteUser = async (uid: string) => {
    Swal.fire({
      title: "Are you sure",
      text: "Are you ready remove this user",
      showCancelButton: true,
    }).then(async (rs) => {
      if (rs.isConfirmed) {
        const response = await apiDeleteUser(uid);

        if (response.data.error === 0) {
          render();
          toast.success(response.data.mes);
        } else toast.error(response.data.mes);
      }
    });
  };

  return (
    <>
      <div className="w-full p-8" id="">
        <h1 className="text-[4rem] font-bold mb-8">Manage User</h1>
        <div className="flex justify-end">
          <InputField
            nameKey="q"
            value={queries.q}
            setValue={setQueries}
            wFull
            size="50"
            hidenLabel
            placeholder="Search name or mail user"
          />
        </div>
        <form onSubmit={handleSubmit(handleUpdate)}>
          {editData && <Button name="Update" status type="submit" />}
          <table className="table-auto text-left mb-6 w-full">
            <thead className="bg-[#374151] text-[1.4rem] text-white">
              <tr>
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">First Name</th>
                <th className="py-2 px-4">Last Name</th>
                <th className="py-2 px-4">Role</th>
                <th className="py-2 px-4">IsBlocked</th>
                <th className="py-2 px-4">Created At</th>
                <th className="py-2 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[1.4rem]">
              {users?.Users?.map((el, index) => (
                <tr className="border border-gray-500" key={index}>
                  <>
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">
                      {editData?._id === el._id ? (
                        <div className="py-2 h-[8rem]">
                          <InputForm
                            defaultValue={editData?.email}
                            id="email"
                            register={register}
                            fullW
                            validate={{
                              required: "Missing Email",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            }}
                            errors={errors?.email?.message}
                          />
                        </div>
                      ) : (
                        <span>{el.email}</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      {editData?._id === el._id ? (
                        <div className="py-2 h-[8rem]">
                          <InputForm
                            placeholder="firstName"
                            id="firstName"
                            register={register}
                            errors={errors?.firstName?.message}
                            fullW={true}
                            validate={{ required: "Missing firstName" }}
                            defaultValue={editData?.firstName}
                          />
                        </div>
                      ) : (
                        <span>{el.firstName}</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      {editData?._id === el._id ? (
                        <div className="py-2 h-[8rem]">
                          <InputForm
                            id="lastName"
                            register={register}
                            defaultValue={editData?.lastName}
                            fullW
                            placeholder="lastName"
                            errors={errors?.lastName?.message}
                            validate={{ required: "Missing lastName" }}
                          />
                        </div>
                      ) : (
                        <span>{el.lastName}</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      {editData?._id === el._id ? (
                        <div className="py-2 h-[8rem]">
                          <SelectForm
                            errors={errors?.role?.message}
                            id="role"
                            register={register}
                            defaultValue={editData?.role}
                            fullw
                            validate={{ required: "require fill" }}
                            options={[
                              { value: "admin", text: "admin" },
                              { value: "user", text: "user" },
                            ]}
                          />
                        </div>
                      ) : (
                        <span>{el.role}</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      {editData?._id === el._id ? (
                        <div className="py-2 h-[8rem]">
                          <SelectForm
                            errors={errors?.isBlocked?.message}
                            id="isBlocked"
                            register={register}
                            defaultValue={editData?.isBlocked}
                            fullw
                            validate={{ required: "require fill" }}
                            options={[
                              { value: "true", text: "isBlocked" },
                              { value: "false", text: "Active" },
                            ]}
                          />
                        </div>
                      ) : (
                        <span>{el.isBlocked ? "Blocked" : "Active"}</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      {moment(el.createdAt).format("DD/MM/YYYY")}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {editData ? (
                        <span
                          onClick={() => setEditData(null)}
                          className="px-4 text-orange-800 hover:underline cursor-pointer"
                        >
                          Back
                        </span>
                      ) : (
                        <span
                          onClick={() => setEditData(el)}
                          className="px-4 text-orange-800 hover:underline cursor-pointer"
                        >
                          Edit
                        </span>
                      )}
                      <span
                        onClick={() => handleDeleteUser(el._id)}
                        className="px-4 text-orange-800 hover:underline cursor-pointer"
                      >
                        Delete
                      </span>
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
        {users && users.count > 12 && (
          <div className="flex justify-end mt-8">
            <Pagination totalCount={users.count} />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
