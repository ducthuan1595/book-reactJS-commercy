import React, { useEffect, useState } from "react";
import { URL, requests } from "../../api/service";

export default function Category() {
  const [categories, setCategories] = useState(null);

  const fetchCategory = async () => {
    const res = await requests.getCategory();
    console.log(res.data);
    if (res.data.message === "ok") {
      setCategories(res.data.data);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  console.log("cateogry", categories);

  return (
    <div className="bg-[white] rounded-sm">
      <div className="p-4">
        <i className="fa-solid fa-table-list text-[24px] text-primary-color"></i>
        <span className="text-[22px] text-center ml-2 font-semibold">
          Danh mục sản phẩm
        </span>
        <div className="border-[1px] border-solid border-border-color mt-4"></div>
      </div>
      <div className="flex items-center justify-center gap-1 py-4">
        {categories &&
          categories.map((c) => {
            return (
              <div key={c._id} className="cursor-pointer">
                <img
                  src={`${URL}/image/${c.banner[0]}`}
                  alt={c.name}
                  className="h-[140px] block mx-auto"
                />
                <div className="text-center">{c.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}