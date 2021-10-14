import React from 'react';
import PropTypes from 'prop-types';
import {calcTime, convertMoney} from '../../helpers.js';
import { Wrapper, Content } from '../MovieInfoBar/MovieInfoBar.styles.js';
import MovieInfo from '../MovieInfo/index.js';

const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className='column'>
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className='column'>
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className='column'>
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>

);

MovieInfo.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;
