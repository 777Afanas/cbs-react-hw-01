import { GrReactjs } from "react-icons/gr";
import css from "./SimpleComponent.module.css"

const SimpleComponent = () => {
  return (
    <div className={css.container}>
      <div>
        <p>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </p>
      </div>
      <div>
        <GrReactjs className={css.icon} />
      </div>
    </div>
  );
};

export default SimpleComponent;
