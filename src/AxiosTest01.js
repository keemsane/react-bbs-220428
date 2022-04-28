import React from 'react';
import axios from 'axios';

class AxiosTest extends React.Component {
  getData = () => {
    //   스프링부트로 생성한 로컬 서버에 접속 시 CORS 오류 발생
    //   CORS (Cross-Origin Resource Sharing) : http 헤더를 사용해 한 출처에서 실행중인 웹 애플리케이션에서 다른 출처의 자원에 접근할 경우 오류 발생. 다른 서버와 데이터 연동하려면 이런 오류가 남.
    axios
      .get('http://localhost:9090/ajax/test?data=test')
    //   .get('/ajax/test?data=test')
    //   .get('https://yts-proxy.now.sh/list_movies.json')
      .then((res) => {
        console.log('CONNECTION SUCCESS !!');
        console.log(res);
      })
      .catch((err) => {
        console.log('CONNECTION FAILURE !!');
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* <h1>리액트 화면 테스트</h1> */}
        <h1>리액트로 서버와 통신하기</h1>
        <button type="button" onClick={this.getData}>
          클릭시 서버와 통신
        </button>
      </div>
    );
  }
}

export default AxiosTest;
