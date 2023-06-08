

export const SelectForm = ({holder}:any) => {
    return (
      <div>
        <select className="w-[200px] text-[15px] px-[10px]   h-[40px] outline-0" name="" id="">
          <option value="">{holder}</option>
        </select>
      </div>
    );
  };