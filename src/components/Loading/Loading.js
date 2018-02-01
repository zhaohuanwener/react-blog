import React, { Component } from 'react'
import NoData from '../NoData/NoData'

export default ({ show }) => {
    return <NoData show={show} text="加载中..."></NoData>
}