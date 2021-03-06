import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Link } from "react-router-dom";
import styles from "./index.module.scss"

type Props = {
  children: ReactJSXElement
}


const AuthLayout = (props: Props) => {
  return (
    <div className={styles.root}>
      <img className={styles.bg} src="/static/images/videos_bg.png" alt="" />
      <Link to="/">
        <img className={styles.logo} src="/static/images/logo_white.svg" alt="" />
      </Link>
        {props.children}
    </div>
  );
};

export default AuthLayout;
