import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { __putUsername } from "../../../redux/modules/mypageSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PATH } from "../../../constants/index";

import Header from "../../header/Header";
import Button from "../../timer/TimerButton";
import SubHeader from "../../header/SubHeader";
import InputBox from "./InputBox";

const UsernameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [countUsername, setCountUsername] = useState(0);

  //버튼 활성화
  const [disabled, setDisabled] = useState(true);

  const [userInfo, setUserInfo] = useState({
    username: "",
  });

  const changeUsernameHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ [name]: value });
    setCountUsername(e.target.value.length);
  };

  useEffect(() => {
    if (countUsername > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [countUsername]);

  const submitUsernameHandler = () => {
    if (userInfo.username === "") {
      alert("닉네임을 입력해주세요!");
    } else {
      return dispatch(__putUsername(userInfo)).then((res) => {
        if (res?.payload?.message === "닉네임 변경 성공") {
          navigate(PATH.timer);
        }
      });
    }
  };

  return (
    <StContainer>
      <Header title="SIGN UP" />
      <SubHeader title="프로필 만들기" />
      <InputBox
        title="닉네임"
        name="username"
        type="text"
        onChange={changeUsernameHandler}
        maxLength="6"
        placeholder="닉네임은 6자리 이하입니다."
        contents={countUsername}
        totalCount="/6"
        textAlign="right"
        margin="20px 0px 0px 0px"
      />
      <Button
        onClick={submitUsernameHandler}
        width="319px"
        marginTop="421px"
        disabled={disabled}
      >
        완료
      </Button>
      <StBottomText>
        닉네임은 추후 마이페이지에서 수정할 수 있습니다.
      </StBottomText>
    </StContainer>
  );
};

export default UsernameForm;

const StContainer = styled.div`
  background-color: #f9f3ea;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StBottomText = styled.div`
  width: 319px;
  height: 18px;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 130%;
  color: #f27808;
  margin-top: 20px;
`;
