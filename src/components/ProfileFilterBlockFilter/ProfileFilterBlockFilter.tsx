import "./ProfileFilterBlockFilter.scss";

import InputSearch from "@UI/InputSearch";
import AppSelector from "@UI/AppSelector";
import StatusSelect from "@UI/StatusSelect";
import SellButton from "@UI/SellButton";
import SortRadio from "@UI/SortRadio";
import DateRangePicker from "@UI/DateRangePicker";

type IProfileFilterBlockFilter = {
  active: number;
};

const ProfileFilterBlockFilter = ({ active }: IProfileFilterBlockFilter) => {
  return (
    <div className="pfb_filters">
      <div className="pfb_filters--first-line">
        <InputSearch placeholder={"Поиск по товарам"} />
        <AppSelector />
        {active === 0 && <StatusSelect type="products" />}
        {active === 1 && <StatusSelect type="orders" />}
        {active === 2 && <StatusSelect type="sold" />}

        {active === 2 && (
          <>
            <SortRadio />
            <DateRangePicker />
          </>
        )}
      </div>

      {active === 0 && <SellButton />}
    </div>
  );
};

export default ProfileFilterBlockFilter;
