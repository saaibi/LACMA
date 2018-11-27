import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const ContentReveal = ({ items }) => {
    return (
        <div>
            {
                items.map((item, index) => (
                    <ul key={index}>
                        <li>
                            <Link to={`/${item.path}`}> {item.name}</Link>
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}

ContentReveal.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ContentReveal
