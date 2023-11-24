import React from "react";
import "./content.css";
import { Button, Flex } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const Content = () => {
  return (
    <div className="content">
      <div class="grid">
        <h1 className="course_title">DANH SÁCH ĐỀ THI</h1>
        <div class="grid__row">

          <div className="course_list col-md-3">
            <div className="card">
              <p className="course_name">ETS 2023 Test 1</p>
              <p className="course_topic">TOEIC</p>
              <p className="course_time">
                <ClockCircleOutlined style={{}} /> 120 phút
              </p>
              <p className="course_detail">7 phần, 200 câu hỏi</p>
              <a href="/exam-reading" className="course_button">
                <Button className="course_button">Vào phòng thi</Button>
              </a>
            </div>
          </div>

          <div className="course_list col-md-3">
            <div className="card">
              <p className="course_name">ETS 2023 Test 1</p>
              <p className="course_topic">TOEIC</p>
              <p className="course_time">
                <ClockCircleOutlined style={{}} /> 120 phút
              </p>
              <p className="course_detail">7 phần, 200 câu hỏi</p>
              <a href="/exam-reading" className="course_button">
                <Button className="course_button">Vào phòng thi</Button>
              </a>
            </div>
          </div>

          <div className="course_list col-md-3">
            <div className="card">
              <p className="course_name">ETS 2023 Test 1</p>
              <p className="course_topic">TOEIC</p>
              <p className="course_time">
                <ClockCircleOutlined style={{}} /> 120 phút
              </p>
              <p className="course_detail">7 phần, 200 câu hỏi</p>
              <a href="/exam-reading" className="course_button">
                <Button className="course_button">Vào phòng thi</Button>
              </a>
            </div>
          </div>

          <div className="course_list col-md-3">
        <div className="card">
          <p className="course_name">Đề Listening Part 1</p>
          <p className="course_topic">TOEIC</p>
          <p className="course_time">
          <ClockCircleOutlined style={{}} /> 6 phút
          </p>
          <p className="course_detail">1 phần, 6 câu hỏi</p>
          <a href="/exam-listen" className="course_button"><Button className="course_button">Vào phòng thi</Button></a>
        </div>
      </div>

      <div className="course_list col-md-3">
        <div className="card">
          <p className="course_name">Đề Listening Part 1</p>
          <p className="course_topic">TOEIC</p>
          <p className="course_time">
          <ClockCircleOutlined style={{}} /> 6 phút
          </p>
          <p className="course_detail">1 phần, 6 câu hỏi</p>
          <a href="/exam-listen" className="course_button"><Button className="course_button">Vào phòng thi</Button></a>
        </div>
      </div>

      <div className="course_list col-md-3">
        <div className="card">
          <p className="course_name">Đề Listening Part 1</p>
          <p className="course_topic">TOEIC</p>
          <p className="course_time">
          <ClockCircleOutlined style={{}} /> 6 phút
          </p>
          <p className="course_detail">1 phần, 6 câu hỏi</p>
          <a href="/exam-listen" className="course_button"><Button className="course_button">Vào phòng thi</Button></a>
        </div>
      </div>

          
        </div>
      </div>
    </div>
  );
};
export default Content;
