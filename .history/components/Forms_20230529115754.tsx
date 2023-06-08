

export const SelectForm = ({holder}:any) => {
    return (
      <div>
        <select className=" text-[15px] px-[10px] bg-[#230251] text   h-[40px] outline-0 rounded-[10px" name="" id="">
          <option value="">{holder}</option>
        </select>
      </div>
    );
  };