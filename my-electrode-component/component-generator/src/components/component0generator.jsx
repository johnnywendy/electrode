import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../styles/component0generator.css";
import messages from "../lang/default-messages";

export default class Component0Generator extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

Component0Generator.displayName = "Component0Generator";

Component0Generator.propTypes = {};

Component0Generator.defaultProps = {};
