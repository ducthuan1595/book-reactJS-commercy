export default function DetailProfile({ inputValue, setInputValue, onSave }) {
  const handleChangeInput = (e, name) => {
    const cpState = { ...inputValue };
    cpState[name] = e.target.value;
    setInputValue(cpState);
  };

  const handleCheckGender = (e) => {
    if (e.target.checked) {
      setInputValue((state) => {
        return { ...state, gender: e.target.value };
      });
    }
  };

  return (
    <div className="bg-white w-full pt-6 pb-32">
      <div className="mx-auto w-[65%]">
        <div className="text-[22px] font-semibold mb-8">Hồ Sơ Của Tôi</div>
        <div className="flex gap-6">
          <div className="flex flex-col mt-2 gap-7">
            <span>Tên đăng nhập</span>
            <span>Tên</span>
            <span>Email</span>
            <span>Số điện thoại</span>
            <span>Địa chỉ</span>
            <span>Giới tính</span>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Tìm gì Thế"
              className="p-2 bg-border-color w-[400px]"
              onChange={(e) => handleChangeInput(e, "accountName")}
              value={inputValue?.accountName}
            />
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              onChange={(e) => handleChangeInput(e, "fullname")}
              value={inputValue.fullname}
              className="p-2 bg-border-color"
            />
            <input
              type="text"
              placeholder="example@gmail.com"
              className="p-2 bg-border-color opacity-50"
              readOnly
              disabled
              value={inputValue.email}
            />
            <input
              type="number"
              onChange={(e) => handleChangeInput(e, "phone")}
              value={inputValue.phone}
              className="p-2 bg-border-color"
            />
            <div className="flex items-center gap-1">
              <input
                type="text"
                onChange={(e) => handleChangeInput(e, "address")}
                value={inputValue.address}
                className="p-2 bg-border-color flex-1"
              />
              {/* <button className="py-2 px-2 text-white bg-blue-400 rounded">Thêm</button> */}
            </div>
            <div
              className="flex items-center gap-6 mt-2"
              onClick={handleCheckGender}
            >
              <div>
                <input
                  type="radio"
                  name="gender"
                  value={"1"}
                  defaultChecked={inputValue.gender === "1"}
                  className="mr-2"
                />
                <label>Nam</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value={"2"}
                  defaultChecked={inputValue.gender === "2"}
                  className="mr-2"
                />
                <label>Nữ</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value={"0"}
                  defaultChecked={inputValue.gender === "0"}
                  className="mr-2"
                />
                <label>Khác</label>
              </div>
            </div>
          </div>
        </div>
        <button
          className="p-2 bg-primary-color text-white rounded-sm my-5"
          onClick={onSave}
        >
          Thay đổi
        </button>
      </div>
    </div>
  );
}
