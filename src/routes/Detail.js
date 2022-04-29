import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
  state = {
    boardNo: '',
    title: '',
    content: '',
    userId: '',
    createDate: '',
    hitCnt: 0,
  };
  componentDidMount() {
    const boardNo = this.props.match.params.boardno;
    const url = `ajax/boardDetail/${boardNo}`;
    axios
      .get(url)
      .then((res) => {
        console.log('CONNECTION SUCCESS !!');
        console.log(res.data);
        this.setState({
          boardNo: res.data.boardNo,
          title: res.data.title,
          content: res.data.content,
          userId: res.data.createId,
          createDate: res.data.createDate,
          hitCnt: res.data.hitCnt,
        })
      })
      .catch((err) => {
        console.log('CONNECTION FAILURE !!');
        console.log(err);
      });
  }
  render() {
    const data = this.props.match.params.boardno;
    console.log(data);
    return (
      <div>
        <header class="container">
          <div class="p-5 mb-4 bg-light rounded-3 text-center">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">React와 SpringBoot를 활용한 게시판</h1>
              <p> 목록 보기 </p>
            </div>
          </div>
        </header>
        <main class="container">
          <section>
            <article>
              <div class="row my-3">
                <div class="col-sm-12">
                  <input type="text" class="form-control" id="title" placeholder="제목" value = {this.state.title}></input>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    id="create-id"
                    placeholder="아이디"
                    value={this.state.userId}
                  ></input>
                </div>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="hit-cnt" placeholder="조회수" value = {this.state.hitCnt}></input>
                </div>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    id="create-date"
                    placeholder="작성일"
                    value={this.state.createDate}
                  ></input>
                </div>
              </div>
              <div class="row my-3">
                <div class="col-sm-12">
                  <div class="my-3">
                    <textarea rows="5" class="form-control" id="content" value = {this.state.content}></textarea>
                  </div>
                </div>
              </div>
              <div class="my-3 d-flex justify-content-between">
                <div>
                  <button type = "button" class = "btn btn-secondary"> <Link style = {{color: 'inherit', textDecoration: 'inherit'}} to = "/">목록</Link> </button>
                </div>
                <div>
                  <button class="btn btn-info mx-3"> 수정 </button>
                  <button class="btn btn-danger"> 삭제 </button>
                </div>
              </div>
            </article>
          </section>
        </main>
        <footer class="container-fluid mt-5 py-5 border-top">
          <p class="lead text-mute text-center">made by BITC</p>
        </footer>
      </div>
    );
  }
}

export default Detail;
