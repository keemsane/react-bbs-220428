import React from 'react';

class Write extends React.Component {
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
                <div class="col-sm-6 mx-auto">
                  <div class="my-3">
                    <label for="title"> 제목 : </label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      name="title"
                      placeholder="제목을 입력하세요"
                    ></input>
                  </div>
                  <div class="my-3">
                    <label for="user-id">ID : </label>
                    <input
                      type="text"
                      class="form-control"
                      id="user-id"
                      name="user-id"
                      placeholder="아이디를 입력하세요"
                    ></input>
                  </div>
                  <div class="my-3">
                    <label for="content"> 글 내용 : </label>
                    <textarea
                      rows="10"
                      class="form-control"
                      id="content"
                      name="content"
                      placeholder="내용을 입력하세요"
                    ></textarea>
                  </div>
                  <div class="my-3 d-flex justify-content-between">
                    <div>
                      <button class="btn btn-secondary"> 목록 </button>
                    </div>
                    <div>                      
                      <button class="btn btn-info mx-3"> 등록 </button>
                      <button class="btn btn-warning"> 취소 </button>
                    </div>
                  </div>
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

export default Write;
