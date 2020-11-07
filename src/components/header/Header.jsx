import React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react';
import styles from './header.module.scss';

const Header = ({ title }) => {
  return (
    <SemanticHeader as="h2" className={styles.header}>
      {title}
    </SemanticHeader>
  );
};
export default Header;
