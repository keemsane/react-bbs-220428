import React from 'react';

class Home extends React.Component {
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
              <div class="row">
                <div class="col">
                  <table class="table table-hover table-striped text-center">
                    <colgroup>
                      <col width="10%" />
                      <col width="50%" />
                      <col width="15%" />
                      <col width="15%" />
                      <col width="10%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>글 번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                        <th>조회수</th>
                      </tr>
                    </thead>
                    <tfoot></tfoot>
                    <tbody>
                      <tr>
                        <td>2</td>
                        <td>제목2</td>
                        <td>글쓴이2</td>
                        <td>2022-04-29</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>제목1</td>
                        <td>글쓴이1</td>
                        <td>2022-04-29</td>
                        <td>4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-primary"> 글 쓰기 </button>
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

export default Home;
