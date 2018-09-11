import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

import { api } from "../../api";

import { PanelHeader } from "components";

import { thead, tbody } from "variables/general";

class Clients extends React.Component {
  state = {
    clients: []
  }

  async componentDidMount() {
    const clientsData = await api.get('clients').then(res => {
      // this.setState({ clients: res.data });
      const data = res.data;
      this.setState({ clients: data });
    });
  }

  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Clients List</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-right">
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {/* {this.state.clients.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                  <td key={key} className="text-right">
                                    {prop}
                                  </td>
                                );
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })} */}
                      {this.state.clients.map((client, key) => {
                        return (
                          <tr key={key}>
                            <th key={key}>{client.id}</th>
                            <td key={key}>{client.name}</td>
                            <td key={key}>{client.occupation}</td>
                            <td key={key}>{client.situation}</td>
                            <td key={key}>{client.have_todo}</td>
                            <td key={key} className="text-right">{client.salary}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  <div>
                    <Button color="success">New Client</Button>
                    <Button color="info">Edit Client</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Clients;