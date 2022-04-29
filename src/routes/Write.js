import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Write extends React.Component {
  state = {
    title: '',
    content: '',
    userId: '',
  };

  titleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  userIdChange = (e) => {
    this.setState({ userId: e.target.value });
  };

  contentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  dataClear = () => {
    this.setState({ 
      title : '',
      content : '',
      userId : '',
  });
  };
  sendData = () => {
    const datas = {
      title: this.state.title,
      content: this.state.content,
      createId: this.state.userId,
    };
    axios
      .post('/ajax/boardWrite', null, { params: datas } )
      .then((res) => {
        console.log('CONNECTION SUCCESS !!');
        console.log(res.data);
      })
      .catch((err) => {
        console.log('CONNECTION FAILURE !!');
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <header className="container">
          <div className="p-5 mb-4 bg-light rounded-3 text-center">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">React와 SpringBoot를 활용한 게시판</h1>
              <p> 목록 보기 </p>
            </div>
          </div>
        </header>
        <main className="container">
          <section>
            <article>
              <div className="row my-3">
                <div className="col-sm-6 mx-auto">
                  <div className="my-3">
                    <label htmlFor="title"> 제목 : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="제목을 입력하세요"
                      value={this.state.title}
                      onChange={this.titleChange}
                    ></input>
                  </div>
                  <div className="my-3">
                    <label htmlFor="user-id">ID : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user-id"
                      name="user-id"
                      placeholder="아이디를 입력하세요"
                      value={this.state.userId}
                      onChange={this.userIdChange}
                    ></input>
                  </div>
                  <div className="my-3">
                    <label htmlFor="content"> 글 내용 : </label>
                    <textarea
                      rows="10"
                      className="form-control"
                      id="content"
                      name="content"
                      placeholder="내용을 입력하세요"
                      value={this.state.content}
                      onChange={this.contentChange}
                    ></textarea>
                  </div>
                  <div className="my-3 d-flex justify-content-between">
                    <div>
                      <button type = "button" className="btn btn-secondary"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/"> 목록 </Link></button>
                    </div>
                    <div>
                      <button type = "button" className="btn btn-info mx-3" onClick={this.sendData}>
                        등록
                      </button>
                      <button type = "reset" className="btn btn-warning" onClick={this.dataClear}>취소</button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </main>
        <footer className="container-fluid mt-5 py-5 border-top">
          <p className="lead text-mute text-center">made by BITC</p>
        </footer>
      </div>
    );
  }
}

export default Write;
