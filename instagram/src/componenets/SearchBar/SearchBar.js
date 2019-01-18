import React from "react";
import "./SearchBar.css";
import styled, { css } from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

const LeftSection = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  width: 33%;
`;

const Header = styled.h1`
  font-family: ubuntu;
`;

const Divider = styled.span`
  font-size: 40px;
  font-weight: 200;
  margin-right: 10px;
  padding-bottom: 5px;
`;

const MiddleSection = styled.div`
  width: 33%;
  text-align: center;
`;

const IgIcon = styled.span`
  font-size: 40px;
  margin-right: 10px;
`;

const RightSection = styled.div`
  margin-right: 20px;
  width: 33%;
  display: flex;
  justify-content: flex-end;

  i {
    font-size: 25px;
    margin-left: 25px;
  }
`;

const Search = styled.input`
  height: 20px;
  width: 150px;
  text-align: center;
`;

const SearchBar = props => {
  return (
    <SearchContainer>
      <LeftSection>
        <IgIcon>
          <i className="fab fa-instagram" />
        </IgIcon>
        <Divider>|</Divider>
        <Header>Instagram</Header>
      </LeftSection>
      <MiddleSection>
        <form onSubmit={e => props.search(e, props.searchValue)}>
          <Search
            type="text"
            placeholder="Search..."
            onChange={props.handleChange}
            value={props.searchValue}
            name="searchValue"
          />
        </form>
      </MiddleSection>
      <RightSection>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </RightSection>
    </SearchContainer>
  );
};

export default SearchBar;
