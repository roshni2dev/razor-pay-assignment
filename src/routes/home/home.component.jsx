import { Fragment } from "react"
import Filters from "../../components/filters/filters.component"
import TableList from "../../components/table-list/table-list.component"
import TestMessage from "../../components/test-message/test-message.component"
import { Checkbox } from "@mui/material"
import {FileDownloadOutlined, KeyboardArrowDown, MoreVertOutlined, ReplayOutlined } from "@mui/icons-material"

const Home = () => {
    return (
        <Fragment>
            <Filters />
            <TestMessage />
            <div className="flex items-center justify-between  mx-10 ">
                <div className="flex items-center justify-start">
                    <Checkbox size="small" style={{ color: '#c3d4d7' }} />
                    <p className="text-xs mr-4 text-[#c3d4d7] ">Showing 1-5 payouts</p>
                    <p className="text-xs mr-1 text-[#c3d4d7] ">Sort by</p>
                    <p className="text-xs mr-4 text-[#66a7f3] ">latest creation date <KeyboardArrowDown style={{ fill: '#66a7f3' }} /> </p>
                </div>

                <div className="flex items-center justify-start">
                    <ReplayOutlined className="mr-2" style={{ fontSize: '20px', fill: '#5599eb' }} />
                    <MoreVertOutlined className="mr-2" style={{ fontSize: '20px', fill: '#5599eb' }} />
                    <button className="border border-[#5599eb] rounded-sm mr-2  px-4 py-2 text-[#5599eb] capitalize text-xs">
                        <FileDownloadOutlined style={{ fontSize: '16px' }} /> Export
                    </button>
                    <div className="flex items-center justify-start bg-[#2a86f3] rounded-sm ">
                        <button className=" px-4 py-2 text-[#f5f5f5] font-medium uppercase text-xs">
                            &#x2b; payout
                        </button>
                        <button className="px-2">
                            <KeyboardArrowDown style={{ fontSize: '16px', fill: '#c3d4d7' }} />
                        </button>
                    </div>
                </div>
            </div>
            <TableList />
        </Fragment>
    )
}

export default Home
