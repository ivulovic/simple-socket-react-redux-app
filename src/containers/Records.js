import React from "react";
import {connect} from "react-redux";
import * as RecordActions from "../store/actions/record.actions";
import {Spinner} from "../components";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class Records extends React.Component{

  constructor(){
    super();
    this.state = {
      columns:null
    };
    this.defineColumns = this.defineColumns.bind(this);
  }

  defineColumns(){
    let columnDefinition = ['SYMBOL', 'DAILY CHANGE', 'VOLUME', 'LAST PRICE'];
    let columns = [];
    columnDefinition.map( (e, i)=> columns.push(<TableHeaderColumn key={i}> {e} </TableHeaderColumn>))
    this.setState({
      columns
    })
  }

  componentDidMount(){
    this.defineColumns();
  }

  render(){
    let records = this.props.records.records;
    let keys = Object.keys(records);
    let recordsData = (keys.length && keys[0]!==0) && keys.map((id, i)=> (
      records[id] && records[id].values) && (
        <TableRow key={i}>
          <TableRowColumn> { this.props.records.records[id].pair} </TableRowColumn>
          {records[id].values.map((e, i)=> <TableRowColumn key={i}>{e}</TableRowColumn>)}
        </TableRow>
      )
    );
    return (
      <div>
        <div>
          <Table height={"auto"} fixedHeader={true} fixedFooter={false} selectable={false} multiSelectable={false}>
            <TableHeader  displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false} >
              <TableRow>
                {this.state.columns}
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} deselectOnClickaway={false} showRowHover={false} stripedRows={undefined}>
              {recordsData || <TableRow><TableRowColumn className={"centered-spinner"}><Spinner spin={true}/></TableRowColumn></TableRow>  }
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    records: state.records
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRecords: () => dispatch(RecordActions.loadRecords()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Records);