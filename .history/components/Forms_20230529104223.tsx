

export const SelectForm = ({holder}:any) => {
    return (
      <div>
        <select className="w-[200px] text-[15px] px-[10px]  border-slate-5 h-[40px] outline-0 rounded-[10px]" name="" id="">
          <option value="">{holder}</option>
        </select>
      </div>
    );
  };