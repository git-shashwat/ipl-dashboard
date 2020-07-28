import React from 'react';

import { 
    ButtonGroup,
    Button,
    UncontrolledTooltip,
    Card,
    Table
} from './../../../components';

import { TrTableTasksList } from "./components/TrTableTasksList";
import { CardHeader } from 'reactstrap';

const TasksList = () => (
        <Card className="mb-3">
            { /* START Table */}
            <CardHeader>
                <ButtonGroup>
                    <Button color="primary" className="align-self-center" id="tooltipAddNew">
                        <i className="fa-fw fa fa-plus"></i>
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipAddNew">
                        Add New
                    </UncontrolledTooltip>
                </ButtonGroup>
            </CardHeader>
            <div className="table-responsive-xl">
                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th className="align-middle bt-0">#</th>
                            <th className="align-middle bt-0">Priority</th>
                            <th className="align-middle bt-0">Title & Description</th>
                            <th className="align-middle bt-0">People</th>
                            <th className="align-middle bt-0">Update</th>
                            <th className="align-middle bt-0 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TrTableTasksList />
                        <TrTableTasksList 
                            id="2"
                        />
                        <TrTableTasksList 
                            id="3"
                        />
                        <TrTableTasksList 
                            id="4"
                        />
                    </tbody>
                </Table>
            </div>
        </Card>

);

export default TasksList;
