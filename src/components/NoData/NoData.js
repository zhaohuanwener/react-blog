import React, { Component } from 'react'
import './noData.less'

export default ({ show = true, text = '暂无数据' }) => {
    let className = 'no-data '
    className += show ? 'show' : 'hide'
    return <div className={className}>
        <h3 className="text">{text}</h3>
    </div>
}