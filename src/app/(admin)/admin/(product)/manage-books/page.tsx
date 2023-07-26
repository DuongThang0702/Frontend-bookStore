"use client";
import { apiGetBooks } from "@/api";
import { InputForm, Pagination } from "@/components";
import useDebounce from "@/hooks/useDebounce";
import { BookProps, IBook } from "@/utils/interface";
import moment from "moment";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UpdateBook } from "@/components";
interface Search {
  q: string;
}

const Page: FC = ({}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Search>();
  const queriesDebounce = useDebounce(watch("q"), 800);
  const params = useSearchParams();
  let page = parseInt(params.get("page") as string);
  const [Books, setBooks] = useState<BookProps | null>(null);
  const [render, setRender] = useState<boolean>(false);
  const [editData, setEditData] = useState<IBook | null>(null);
  const searchParams: { q?: string } = {};

  const fetchData = async (params?: object) => {
    const response = await apiGetBooks({
      ...params,
      limit: parseInt(process.env.NEXT_PUBLIC_LIMIT as string),
    });
    if (response.data.error === 0) setBooks(response.data);
  };
  useEffect(() => {
    if (queriesDebounce) searchParams.q = queriesDebounce;
    fetchData({ page, ...searchParams });
  }, [page, queriesDebounce]);

  return (
    <>
      <div className="w-full p-8 relative h-full">
        {editData && (
          <div className="absolute top-0 bottom-0 right-0 left-0 z-50 p-8">
            <UpdateBook data={editData} render={render} />
          </div>
        )}
        <h1 className="text-[4rem] font-bold mb-8">Manage Books</h1>
        <div className="mb-8 w-1/3 float-right">
          <form onSubmit={handleSubmit(() => {})} className="w-full">
            <InputForm
              register={register}
              fullW
              placeholder="Search Books..."
              id="q"
              errors={errors.q?.message}
            />
          </form>
        </div>
        <table className="table-auto text-left mb-6 w-full">
          <thead className="bg-[#374151] text-3xl text-white">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Sold</th>
              <th className="py-2 px-4">Available</th>
              <th className="py-2 px-4">TotalRatings</th>
              <th className="py-2 px-4">CreatedAt</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-3xl">
            {Books?.count && Books.count >= 1 ? (
              Books?.books?.map((el, index) => (
                <tr key={el._id}>
                  <td className="py-2 px-4">
                    {(page - 1) *
                      parseInt(process.env.NEXT_PUBLIC_LIMIT as string) +
                      index +
                      1}
                  </td>
                  <td className="py-2 px-4 w-[50rem]">{el.title}</td>
                  <td className="py-2 px-4">
                    <Image
                      src={el.image.path}
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </td>
                  <td className="py-2 px-4">
                    <span className="mr-1">$</span>
                    {el.price}
                  </td>
                  <td className="py-2 px-4">{el.category.join(" , ")}</td>
                  <td className="py-2 px-4">{el.sold}</td>
                  <td className="py-2 px-4">{el.available}</td>
                  <td className="py-2 px-4">{el.totalRatings}</td>
                  <td className="py-2 px-4">
                    {moment(el.createdAt).format("DD/MM/YYYY")}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      onClick={() => setEditData(el)}
                      className="px-4 text-orange-800 hover:underline cursor-pointer"
                    >
                      Edit
                    </span>
                    <span className="px-4 text-orange-800 hover:underline cursor-pointer">
                      Delete
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
        {Books?.count && Books.count >= 12 ? (
          <div className="flex justify-end mt-8">
            <Pagination totalCount={Books.count} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Page;
