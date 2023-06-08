

export const SelectForm = ({holder}) => {
    const holder: string
    return (
      <div>
        <select className="w-[200px] text-[15px] px-[10px] border border-slate-500 h-[40px] outline-0 rounded-[10px]" name="" id="">
          <option value="">{holder}</option>
        </select>
      </div>
    );
  };