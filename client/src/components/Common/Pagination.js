import React from 'react'
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap'

const AppPagination = () => {
    return (
        <div className="row justify-content-center">
            <Pagination aria-label="Pages">
                <PaginationItem>
                    <PaginationLink first href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink active="true" href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#"/>
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default AppPagination;