import React from 'react';

class Detail extends React.Component {
  render() {
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
                  <input
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder="제목"
                    ></input>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    id="create-id"
                    placeholder="아이디"
                  ></input>
                </div>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="hit-cnt" placeholder="조회수"></input>
                </div>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    id="create-date"
                    placeholder="작성일"
                  ></input>
                </div>
              </div>
              <div class="row my-3">
                <div class="col-sm-12">
                  <div class="my-3">
                    <textarea rows="5" class="form-control" id="content"></textarea>
                  </div>
                </div>
              </div>
              <div class="my-3 d-flex justify-content-between">
                    <div>
                      <button class="btn btn-secondary"> 목록 </button>
                    </div>
                    <div>                      
                      <button class="btn btn-primary mx-3"> 등록 </button>
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
