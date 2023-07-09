"use client";
import { FC, useEffect, useState, Fragment } from "react";
import { apiGetUsers } from "@/api";
import { UserData } from "@/utils/IUser";
const Page: FC = ({}) => {
  const [users, setUsers] = useState<Array<UserData> | null>(null);
  const fetchUsreData = async () => {
    const response = await apiGetUsers();
    if (response.data.error === 0) setUsers(response.data.Users);
  };

  useEffect(() => {
    fetchUsreData();
  }, []);
  return (
    <>
      <div className="w-full p-8">
        <h1>Manage User</h1>
        <table className="table-auto text-left mb-6 w-full">
          <thead className="bg-[#374151] text-[1.4rem] text-white">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Fullname</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Created At</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[1.4rem]">
            <tr className="border border-gray-500">
              {users?.map((el, index) => (
                <Fragment key={index}>
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{el.email}</td>
                  <td className="py-2 px-4">
                    {el.lastName} {el.firstName}
                  </td>
                  <td className="py-2 px-4">{el.role}</td>
                  <td className="py-2 px-4">
                    {el.isBlocked ? "Blocked" : "Active"}
                  </td>
                  <td className="py-2 px-4">{el.createdAt}</td>
                  <td className="py-2 px-4">
                    <span className="px-4 text-orange-800 hover:underline cursor-pointer">
                      Edit
                    </span>
                    <span className="px-4 text-orange-800 hover:underline cursor-pointer">
                      Delete
                    </span>
                  </td>
                </Fragment>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
