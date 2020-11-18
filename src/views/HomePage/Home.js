/**
 * @file
 * Contains Home Page Component.
 */

import React from 'react';
import {
  HomeContainerStyled,
  ProsConsContainer,
  Block,
} from './Home.style';
import Header from '../components/Header';
import Input from '../components/Input';
import { connect } from 'react-redux';
import { onChange } from '../../redux/actions';

const Home = ({ pros, cons, onChange }) => {
  return (
    <HomeContainerStyled>
      <Header title='Should I eat at McDonalds?'/>
      <ProsConsContainer height='40px'>
        <Block marginR='1px'>PROS</Block>
        <Block>CONS</Block>
      </ProsConsContainer>
      <ProsConsContainer height='400px' marginT='0.5px'>
        <Block justify='flex-start' direction='column' overflow='auto' marginR='1px'>
          {cons.map((item, id) => (
            <Input
              value={item}
              id={id + 1}
              key={id}
              onChange={(e) =>
                onChange({ type: 'cons', id, value: e.target.value })
              }
            />
          ))}
        </Block>
        <Block justify='flex-start' direction='column' overflow='auto'>
          {pros.map((item, id) => (
            <Input
              value={item}
              id={id + 1}
              key={id}
              onChange={(e) =>
                onChange({ type: 'pros', id, value: e.target.value })
              }
            />
          ))}
        </Block>
      </ProsConsContainer>
    </HomeContainerStyled>
  );
};

const mapStateToProps = ({ cons, pros }) => {
  return { cons, pros };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (info) => {
      dispatch(onChange(info));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
