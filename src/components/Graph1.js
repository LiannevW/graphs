import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Graph1 extends PureComponent {
  render() {
    const data = this.props.data

    return (
      <div id="graph1">
        <BarChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend name="real-time top 10 meetup topics"/>
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({ data })
export default connect(mapStateToProps)(Graph1)
