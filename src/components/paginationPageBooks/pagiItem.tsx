import { FC, useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface PageProps {
  children: string | number;
}

const Page: FC<PageProps> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleOnClick = () => {
    router.push(
      pathname + "?" + createQueryString("page", children.toString())
    );
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={
        Number(children)
          ? `cursor-pointer text-[1.6rem] ${
              parseInt(searchParams.get("page") as string) === children
                ? `text-purple`
                : ``
            }`
          : "text-[1.6rem]"
      }
      disabled={!Number(children)}
    >
      {children}
    </button>
  );
};

export default Page;
