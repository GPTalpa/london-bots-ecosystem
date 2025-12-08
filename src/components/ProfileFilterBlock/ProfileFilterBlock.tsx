import "./ProfileFilterBlock.scss";

import { useState } from "react";

import ProfileFilterBlockHeader from "@components/ProfileFilterBlockHeader";
import ProfileFilterBlockFilter from "@components/ProfileFilterBlockFilter";
import ProfileFilterBlockContent from "@components/ProfileFilterBlockContent";

const ProfileFilterBlock = () => {
  const [active, setActive] = useState(0);

  const updateActiveHeader = (e: number) => {
    setActive(e);
  };
  return (
    <div className="porfile_filter_block">
      <ProfileFilterBlockHeader
        active={active}
        updateActiveHeader={updateActiveHeader}
      />
      <ProfileFilterBlockFilter active={active} />
      <ProfileFilterBlockContent />
    </div>
  );
};

export default ProfileFilterBlock;
