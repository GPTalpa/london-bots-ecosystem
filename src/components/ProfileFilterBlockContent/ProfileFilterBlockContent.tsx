import "./ProfileFilterBlockContent.scss";

import empty from "@icons/empty.svg";

const ProfileFilterBlockContent = () => {
  return (
    <div className="profileFilterBlock">
      <img src={empty} alt="" />
      <p>У вас тут пусто :(</p>
    </div>
  );
};

export default ProfileFilterBlockContent;
