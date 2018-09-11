import React from "react";

import { PanelHeader } from "components";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content" />
      </div>
    );
  }
}

export default Dashboard;
