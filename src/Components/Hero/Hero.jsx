import { ReactComponent as ArrowLeft } from "../../Shared/images/arrow_left.svg";
import { ReactComponent as ArrowRight } from "../../Shared/images/arow_right.svg";
import { ReactComponent as Line } from "../../Shared/images/Line 3.svg";
import House from "../../Shared/images/Hero_image.png";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.heroContainer}>
          <div className={s.descriptionHero}>
            <h1 className={s.title}>
              Project <span>home</span>
            </h1>
            <div className={s.arrowContainer}>
              <div className={s.arrow}>
                <ArrowLeft className={s.arrowLeft} />
              </div>
              <div className={s.arrow}>
                <ArrowRight className={s.arrowLeft} />
              </div>
            </div>
            <div className={s.numberContainer}>
              <p className={s.numberOne}>01</p>
              <Line className={s.line} />
              <p className={s.numberTwo}>02</p>
            </div>
          </div>
          <div className={s.imgContainer}>
            <img src={House} alt="house" className={s.titleImage} />
            <button className={s.buttonRight}>
              <div>
                <span>ВЗГЛЯНУТЬ</span>
                <ArrowRight className={s.buttonArrowRight} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
