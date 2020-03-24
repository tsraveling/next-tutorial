import Header from './Header';
import styles from './Layout.module.scss'

const Layout = props => (
    <div className={styles.layout}>
        <Header />
        {props.children}
    </div>
);

export default Layout;
