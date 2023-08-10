import { ReactComponent as ArrowLeft } from "../../Shared/images/arrow_left.svg";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <h1 className={s.title}>
          Project <span>home</span>
        </h1>
        <div className={s.arrowContainer}>
          <div className={s.arrow}>
            <ArrowLeft className={s.arrowLeft} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
