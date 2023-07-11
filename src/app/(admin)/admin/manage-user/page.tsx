"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { apiGetUsers, apiUpdateUserByAdmin, apiDeleteUser } from "@/api";
import { UserCurrent, UserData } from "@/utils/IUser";
import { Button, InputField, Pagination, Select } from "@/components";
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
  const [editData, setEditData] = useState<UserCurrent | null>(null);
  const page: string | null = searchParams.get("page");
  const [queries, setQueries] = useState<{ q: string }>({ q: "" });
  const [users, setUsers] = useState<UsersData | null>(null);
  const [update, setUpdate] = useState<boolean>(false);
  const fetchUsreData = async (params?: { q?: string }) => {
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
    fetchUsreData(params);
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
  console.log(editData);

  return (
    <>
      <div className="w-full p-8" id="">
        <h1 className="text-[4rem] font-semibold mb-8">Manage User</h1>
        <div className="flex justify-end">
          <InputField
            nameKey="q"
            value={queries.q}
            setValue={setQueries}
            wFull={true}
            size="50"
            hidenLabel={true}
            placeholder="Search name or mail user"
          />
        </div>
        <form onSubmit={handleSubmit(handleUpdate)}>
          {editData && <Button name="Update" status={true} type="submit" />}
          <table className="table-auto text-left mb-6 w-full">
            <thead className="bg-[#374151] text-[1.4rem] text-white">
              <tr>
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">First Name</th>
                <th className="py-2 px-4">Last Name</th>
                <th className="py-2 px-4">Role</th>
                <th className="py-2 px-4">Status</th>
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
                          <input
                            defaultValue={editData?.email}
                            type="text"
                            placeholder="email"
                            className="w-full p-4 outline-1 border-2 border-gray-500"
                            id="email"
                            {...register("email", {
                              required: "Missing Email",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            })}
                          />
                          {errors.email && (
                            <small className="text-red font-semibold">
                              {errors?.email?.message}
                            </small>
                          )}
                        </div>
                      ) : (
                        <span>{el.email}</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      {editData?._id === el._id ? (
                        <div className="py-2 h-[8rem]">
                          <input
                            defaultValue={editData?.firstName}
                            type="text"
                            placeholder="firstName"
                            id="firstName"
                            className="w-full p-4 outline-1 border-2 border-gray-500"
                            {...register("firstName", {
                              required: "Missing input",
                            })}
                          />
                          {errors.firstName && (
                            <small className="text-red font-semibold">
                              {errors?.firstName?.message}
                            </small>
                          )}
                        </div>
                      ) : (
                        <span>{el.firstName}</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      {editData?._id === el._id ? (
                        <div className="py-2 h-[8rem]">
                          <input
                            defaultValue={editData?.lastName}
                            type="text"
                            id="LastName"
                            placeholder="LastName"
                            className="w-full p-4 outline-1 border-2 border-gray-500"
                            {...register("lastName", {
                              required: "Missing input",
                            })}
                          />
                          {errors.lastName && (
                            <small className="text-red font-semibold">
                              {errors?.lastName?.message}
                            </small>
                          )}
                        </div>
                      ) : (
                        <span>{el.lastName}</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      {editData?._id === el._id ? (
                        <div className="py-2 h-[8rem]">
                          <select
                            {...register("role")}
                            className="w-full p-4 outline-1 border-2 border-gray-500"
                            defaultValue={editData?.role}
                          >
                            <option value="">--CHOOSE--</option>
                            <option value="admin">admin</option>
                            <option value="user">user</option>
                          </select>
                        </div>
                      ) : (
                        <span>{el.role}</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      {editData?._id === el._id ? (
                        <div className="py-2 h-[8rem]">
                          <select
                            {...register("isBlocked")}
                            className="w-full p-4 outline-1 border-2 border-gray-500"
                            defaultValue={editData?.isBlocked}
                          >
                            <option value="">--CHOOSE--</option>
                            <option value="true">isBlocked</option>
                            <option value="false">Active</option>
                          </select>
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
