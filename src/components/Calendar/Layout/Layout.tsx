import { PropsWithChildren } from "react";

import styles from "./layout.module.css";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	const { layout } = styles;

	return <div className={layout}>{children}</div>;
};

export default Layout;
